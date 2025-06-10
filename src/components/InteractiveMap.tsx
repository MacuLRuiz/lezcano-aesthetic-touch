
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Consultorio {
  location: string;
  address: string;
  schedule: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface InteractiveMapProps {
  consultorios: Consultorio[];
  selectedConsultorio?: number;
  onConsultorioSelect: (index: number) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  consultorios, 
  selectedConsultorio,
  onConsultorioSelect 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyBRPPWi9b6M8QKh6VJKqJ7qKqJ7qKqJ7qK", // Placeholder - usuario debe agregar su API key
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      setIsLoaded(true);
    }).catch(e => {
      console.error('Error loading Google Maps:', e);
    });
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || typeof google === 'undefined') return;

    // Crear el mapa centrado en Buenos Aires
    const mapInstance = new google.maps.Map(mapRef.current, {
      zoom: 10,
      center: { lat: -34.6118, lng: -58.3960 }, // Buenos Aires
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
        }
      ]
    });

    setMap(mapInstance);

    // Crear marcadores para cada consultorio
    const newMarkers = consultorios.map((consultorio, index) => {
      const marker = new google.maps.Marker({
        position: consultorio.coordinates,
        map: mapInstance,
        title: consultorio.location,
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="15" fill="#83484A" stroke="white" stroke-width="3"/>
              <text x="20" y="25" text-anchor="middle" fill="white" font-size="12" font-weight="bold">${index + 1}</text>
            </svg>
          `),
          scaledSize: new google.maps.Size(40, 40)
        }
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="p-3">
            <h3 class="font-semibold text-lg mb-2" style="color: #83484A">${consultorio.location}</h3>
            <p class="text-gray-700 mb-1">${consultorio.address}</p>
            <p class="text-gray-600 text-sm">${consultorio.schedule}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        onConsultorioSelect(index);
        infoWindow.open(mapInstance, marker);
      });

      return marker;
    });

    setMarkers(newMarkers);

    return () => {
      newMarkers.forEach(marker => marker.setMap(null));
    };
  }, [isLoaded, consultorios, onConsultorioSelect]);

  useEffect(() => {
    if (!map || selectedConsultorio === undefined || typeof google === 'undefined') return;

    const consultorio = consultorios[selectedConsultorio];
    if (!consultorio) return;

    // Centrar el mapa en el consultorio seleccionado
    map.setCenter(consultorio.coordinates);
    map.setZoom(16);

    // Abrir el info window del marcador seleccionado
    if (markers[selectedConsultorio]) {
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="p-3">
            <h3 class="font-semibold text-lg mb-2" style="color: #83484A">${consultorio.location}</h3>
            <p class="text-gray-700 mb-1">${consultorio.address}</p>
            <p class="text-gray-600 text-sm">${consultorio.schedule}</p>
          </div>
        `
      });
      infoWindow.open(map, markers[selectedConsultorio]);
    }
  }, [selectedConsultorio, map, markers, consultorios]);

  if (!isLoaded) {
    return (
      <div className="h-[500px] bg-gris-claro rounded-lg flex items-center justify-center">
        <p className="text-gray-600">Cargando mapa...</p>
      </div>
    );
  }

  return (
    <div className="h-[500px] bg-gris-claro rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default InteractiveMap;
