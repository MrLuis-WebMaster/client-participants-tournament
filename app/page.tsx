import SectionOne from "@/components/Common/SectionOne";
import SectionTwo from "@/components/Common/SectionTwo";
import Slogan from "@/components/slogan";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Card from "@/components/cards";


import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'FreshWar | Inicio',
  description: 'FreshWar',
}

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
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
        paragraph="La inscripción en FreshWar te brinda acceso a emocionantes torneos, cada uno con su propio precio de inscripción. Regístrate ahora para participar en estos apasionantes desafíos. Completa nuestro formulario de inscripción en línea, proporciona los detalles requeridos y prepárate para demostrar tus habilidades en las diferentes competencias. Los precios de inscripción varían según el torneo, así que elige los que más te gusten. ¡Únete a la diversión y compite en tus juegos favoritos!"
      />
    </>
  );
}
