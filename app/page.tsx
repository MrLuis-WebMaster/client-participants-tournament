import SectionOne from "@/components/Common/SectionOne";
import SectionTwo from "@/components/Common/SectionTwo";
import Slogan from "@/components/slogan";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Card from "@/components/cards";


import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'FreshWar Torneo | Inicio',
  description: 'FreshWar Torneo',
}

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <p>

      </p>
      <Features />
      <SectionOne
        image="/images/rules.svg"
        list={["Horarios y Compromiso", "Comunicación y Lenguaje", "Condiciones de Victoria y Derrota", "Fair Play"]}
        title="Reglas y Normativas"
        paragraph="Para garantizar que cada participante tenga una experiencia equitativa y emocionante, hemos establecido reglas y normativas estrictas. Estas reglas abarcan el formato del torneo, las restricciones de equipo y las políticas de comportamiento. Asegúrate de revisarlas detenidamente para disfrutar al máximo de la competencia en FreshWar." />
      <Card />
      <Slogan />
      <SectionTwo
        image="/images/register.svg"
        title="Inscripciones"
        paragraph="La inscripción en FreshWar es tu pasaporte a la emoción y la competencia. Regístrate ahora para participar en este torneo épico de Call of Duty Mobile. Completa nuestro formulario de inscripción en línea, proporciona los detalles requeridos y prepárate para mostrar tus habilidades en la arena de juego. La inscripción tiene un costo de 8.000 pesos colombianos o 2 dólares estadounidenses."
      />
      <Contact />
    </>
  );
}
