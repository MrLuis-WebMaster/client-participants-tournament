import SectionOne from "@/components/Common/SectionOne";
import SectionTwo from "@/components/Common/SectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'FreshWar Torneo | Torneo',
  description: 'FreshWar Torneo',
}
const TorneoPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Torneo"
        description="Preparate para divertirte en el torneo"
      />

      <SectionOne
        image="/images/thinking.svg"
        list={[]}
        title="¿Que es FreshWar?"
        paragraph="FreshWar es un torneo enraizado en la pasión por los videojuegos y el mundo de la programación, donde amigos, familiares y sus círculos cercanos pueden participar en una competencia sana y emocionante. Nuestra misión es crear un espacio donde cada jugador pueda disfrutar al máximo, siendo parte de una comunidad fresca y vibrante." />

      <SectionTwo
        image="/images/register.svg"
        title="Inscripciones"
        paragraph={`¡Prepárate para unirte a la batalla en FreshWar! Tu entrada al mundo de la competencia está a solo un paso. Regístrate ahora para participar en este emocionante torneo de Call of Duty Mobile. Completa nuestro sencillo formulario de inscripción en línea, proporciona los detalles necesarios y prepárate para demostrar tu destreza en la arena. La inscripción tiene un costo de 8.000 pesos colombianos o 2 dólares estadounidenses. ¿Estás listo para la acción? Regístrate <a href="/inscripcion" target='_black' class="border-b">aquí</a> y asegura tu lugar en FreshWar. 🎮✨`}
      />
      <SectionOne
        image="/images/rules.svg"
        list={[]}
        title="Reglas y Normativas"
        paragraph={`Para garantizar una competencia justa y emocionante, en FreshWar seguimos estrictas normativas y reglas. ¡Es fundamental que todos los participantes las conozcan y respeten! Antes de unirte, asegúrate de revisar detenidamente nuestras reglas en el siguiente <a href="/files/normas.pdf" target='_black' class="border-b">enlace</a> y estar completamente informado para disfrutar al máximo cada momento en FreshWar. 📖👀`} />


      <SectionTwo
        image="/images/ceo.svg"
        title="Creador"
        paragraph={`Soy Luis Martinez, el cerebro detrás de FreshWar. Este proyecto nació de mi ardiente pasión por la programación y la creación de aplicaciones, bots y sitios web que impacten positivamente en las comunidades. En esta ocasión, fusioné mi amor por la programación con mi entusiasmo por el gaming mobile para crear un espacio donde amigos y amantes de los videojuegos puedan disfrutar de un torneo único. ¡Espero que todos se diviertan al máximo! Para cualquier consulta, sugerencia o soporte, estoy a tu disposición. Conéctate conmigo <a href="https://mrluisdev.vercel.app/" target='_black' class="border-b">aquí</a> o envía un mensaje a través de nuestro formulario de contacto en el sitio web. 🚀🎮`}
      />
    </>
  );
};

export default TorneoPage;
