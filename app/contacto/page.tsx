import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import FormContact from "@/components/Contact/FormContact";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'FreshWar Torneo | Contacto',
  description: 'FreshWar Torneo',
}
const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contáctanos"
        description="En este formulario puedes ponerte en contacto con nosotros a traves de correo"
      />
      <section id="contact" className="overflow-hidden pb-16 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[1200px]  py-10 px-6 sm:p-[30px]">
                <FormContact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
