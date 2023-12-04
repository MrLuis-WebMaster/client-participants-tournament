import SectionOne from "@/components/Common/SectionOne";
import SectionTwo from "@/components/Common/SectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FreshWar | Nosotros',
  description: 'FreshWar',
}
const TorneoPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nosotros"
        description="Nuestra Historia y Equipo"
      />

      <SectionOne
        image="/images/thinking.svg"
        list={[]}
        title="¿Que es FreshWar?"
        paragraph="FreshWar es un torneo enraizado en la pasión por los videojuegos y el mundo de la programación, donde amigos, familiares y sus círculos cercanos pueden participar en una competencia sana y emocionante. Nuestra misión es crear un espacio donde cada jugador pueda disfrutar al máximo, siendo parte de una comunidad fresca y vibrante." />

      <SectionTwo
        image="/images/ceo.svg"
        title="Creador"
        paragraph={`Soy Luis Martinez, el cerebro detrás de FreshWar. Este proyecto nació de mi ardiente pasión por la programación y la creación de aplicaciones, bots y sitios web que impacten positivamente en las comunidades. En esta ocasión, fusioné mi amor por la programación con mi entusiasmo por el gaming mobile para crear un espacio donde amigos y amantes de los videojuegos puedan disfrutar de un torneo único. ¡Espero que todos se diviertan al máximo! Para cualquier consulta, sugerencia o soporte, estoy a tu disposición. Conéctate conmigo <a href="https://mrluisdev.vercel.app/" target='_black' class="border-b">aquí</a> o envía un mensaje a través de nuestro formulario de contacto en el sitio web. 🚀🎮`}
      />
    </>
  );
};

export default TorneoPage;
