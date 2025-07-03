
// Utilidad para optimización y compresión de imágenes
export interface ImageCompressionOptions {
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

export const compressImage = async (
  file: File,
  options: ImageCompressionOptions = {}
): Promise<Blob> => {
  const {
    quality = 0.8,
    maxWidth = 1920,
    maxHeight = 1080,
    format = 'webp'
  } = options;

  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Calcular nuevas dimensiones manteniendo aspect ratio
      let { width, height } = img;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;

      // Dibujar imagen redimensionada
      ctx?.drawImage(img, 0, 0, width, height);

      // Convertir a blob con compresión
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Error al comprimir imagen'));
          }
        },
        `image/${format}`,
        quality
      );
    };

    img.onerror = () => reject(new Error('Error al cargar imagen'));
    img.src = URL.createObjectURL(file);
  });
};

export const getOptimizedImageUrl = (
  originalUrl: string,
  options: { width?: number; height?: number; quality?: number } = {}
): string => {
  // Para imágenes de Unsplash, podemos usar sus parámetros de optimización
  if (originalUrl.includes('unsplash.com')) {
    const url = new URL(originalUrl);
    if (options.width) url.searchParams.set('w', options.width.toString());
    if (options.height) url.searchParams.set('h', options.height.toString());
    if (options.quality) url.searchParams.set('q', options.quality.toString());
    url.searchParams.set('fm', 'webp');
    url.searchParams.set('fit', 'crop');
    return url.toString();
  }
  
  return originalUrl;
};

export const generateSrcSet = (baseUrl: string): string => {
  if (baseUrl.includes('unsplash.com')) {
    return [
      `${getOptimizedImageUrl(baseUrl, { width: 400 })} 400w`,
      `${getOptimizedImageUrl(baseUrl, { width: 800 })} 800w`,
      `${getOptimizedImageUrl(baseUrl, { width: 1200 })} 1200w`,
      `${getOptimizedImageUrl(baseUrl, { width: 1600 })} 1600w`
    ].join(', ');
  }
  
  return baseUrl;
};
