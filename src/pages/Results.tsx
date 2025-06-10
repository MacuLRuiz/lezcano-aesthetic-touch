
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simple animation on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight - 100) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const faqItems = [
    {
      question: "¿Los resultados son naturales?",
      answer: "Sí. Nuestro enfoque es lograr resultados armónicos y naturales, que respeten tu identidad y tu expresión personal."
    },
    {
      question: "¿Cómo es la recuperación después de la cirugía?",
      answer: "Depende de cada procedimiento. Siempre te brindamos un plan personalizado de recuperación y seguimiento, adaptado a tus necesidades."
    },
    {
      question: "¿Qué respaldo tengo como paciente?",
      answer: "Trabajás con un equipo médico especializado, en espacios seguros, con atención personalizada en cada etapa del proceso."
    },
    {
      question: "¿Cómo es la consulta inicial?",
      answer: "La consulta es un espacio de escucha. Conversamos sobre tus expectativas, dudas y te explicamos las opciones de tratamiento de manera clara y realista."
    },
    {
      question: "¿Dónde atiende la Dra. Beatriz Lezcano?",
      answer: "Atiendo en los siguientes consultorios:\n\nLanús: Coronel Pringles 2454 (lunes y jueves)\n\nQuilmes: Sarmiento 612 (martes)\n\nNordelta: Estética Dardano, Barrio Puerto Escondido (viernes)\n\nHudson: Rincón de Hudson, Calle 137 (con turno previo)"
    },
    {
      question: "¿Atienden por obra social?",
      answer: "Actualmente la atención es de carácter privado. No trabajamos con obras sociales ni prepagas. Sin embargo, te brindamos toda la información para que puedas evaluar tus opciones con total claridad."
    },
    {
      question: "¿Cuáles son las formas de pago?",
      answer: "Se aceptan pagos en efectivo, transferencia bancaria y, en algunos casos, tarjetas. Consultá en tu primera entrevista para conocer las opciones disponibles."
    },
    {
      question: "¿Qué tipo de procedimientos realiza la Dra. Lezcano?",
      answer: "Realizo cirugías estéticas y reconstructivas, así como tratamientos no invasivos. Siempre con un enfoque ético y personalizado."
    },
    {
      question: "¿Puedo hacer más de un procedimiento en una misma intervención?",
      answer: "En algunos casos sí. Esto se evalúa en consulta, priorizando siempre la seguridad y bienestar de cada paciente."
    },
    {
      question: "¿Es normal sentir temor antes de una cirugía?",
      answer: "Sí, es absolutamente normal. Mi compromiso es brindarte toda la información que necesites para que tomes decisiones informadas y te sientas acompañada/o en todo el proceso."
    },
    {
      question: "¿Qué diferencia al Equipo Lezcano?",
      answer: "Nuestra filosofía es trabajar con ética, cercanía y resultados naturales. No promovemos estándares irreales ni modas pasajeras. Cada tratamiento es pensado para respetar la esencia y las necesidades de cada persona."
    },
    {
      question: "¿Cómo puedo agendar una consulta?",
      answer: "Podés contactarnos a través del formulario de la web, por WhatsApp o redes sociales. Tu consulta es confidencial y sin compromiso."
    }
  ];

  // Split FAQ items into two columns
  const midpoint = Math.ceil(faqItems.length / 2);
  const firstColumn = faqItems.slice(0, midpoint);
  const secondColumn = faqItems.slice(midpoint);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="relative pt-32 pb-24 min-h-[90vh] flex items-center" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(131, 72, 74, 0.64), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/Preguntas.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "50% 25%"
        }}
      >
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-seasons mb-6 text-white">Preguntas frecuentes</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
            Encontrá respuestas a las dudas más comunes sobre cirugía plástica, 
            procedimientos estéticos y mi forma de trabajo.
          </p>
          <div className="h-1 w-24 bg-rosa-claro mx-auto mt-8"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto animate-on-scroll">
            <SectionTitle 
              title="Todas tus dudas, resueltas"
              subtitle="Información clara y transparente sobre cada aspecto de mi trabajo"
              centered={true}
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* First Column */}
              <Accordion type="single" collapsible className="space-y-2">
                {firstColumn.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium text-borgona">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                      {item.answer.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < item.answer.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Second Column */}
              <Accordion type="single" collapsible className="space-y-2">
                {secondColumn.map((item, index) => (
                  <AccordionItem key={`second-${index}`} value={`item-second-${index}`} className="border border-gray-200 rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium text-borgona">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                      {item.answer.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < item.answer.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section with Image */}
      <section className="py-16 bg-gris-claro">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto animate-on-scroll">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl font-seasons mb-6">
                  ¿Tenés dudas? Es normal
                </h2>
                <p className="text-lg mb-8">
                  Cada consulta es única y personal. Si tenés otras preguntas o querés conocer 
                  más detalles sobre algún procedimiento específico, no dudes en contactarme.
                </p>
                <NavLink 
                  to="/contacto" 
                  className="bg-borgona text-white py-3 px-8 rounded hover:bg-borgona/90 transition-all font-medium inline-block transform hover:scale-105 hover:shadow-lg"
                >
                  Hacer una consulta personalizada
                </NavLink>
              </div>
              
              {/* Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/5c7e72cc-bdeb-4027-89b9-414c6309f0d2.png" 
                  alt="Dra. Beatriz Lezcano en consulta médica" 
                  className="w-full h-auto rounded-lg shadow-lg animate-on-scroll animate-slide-in-left overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
