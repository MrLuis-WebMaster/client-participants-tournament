/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Breadcrumb from '@/components/Common/Breadcrumb';
export const metadata: Metadata = {
    title: 'FreshWar | Politica de privacidad',
    description: 'FreshWar',
}
const PagePrivacyPolicy = () => {
    return (
        <>
            <Breadcrumb
                pageName="Política de Privacidad - Torneo Call of Duty Mobile FreshWar"
                description="Esta Política de Privacidad describe cómo se recopila, utiliza y protege la información personal de los participantes en el torneo FreshWar de Call of Duty Mobile."
            />
            <div className="container mx-auto pb-24">
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg">
                    <ol className="list-decimal pl-6 mt-4">
                        <li className="mb-4">
                            <strong>Información Recopilada:</strong>
                            <ul className="list-disc pl-6">
                                <li>Nombre completo</li>
                                <li>Dirección de correo electrónico</li>
                                <li>Nombre de usuario en Call of Duty Mobile</li>
                                <li>Edad y fecha de nacimiento</li>
                                <li>País de residencia</li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Uso de la Información:</strong>
                            <ul className="list-disc pl-6">
                                <li>Comunicarse con los participantes sobre el torneo.</li>
                                <li>Verificar la elegibilidad y autenticidad de los participantes.</li>
                                <li>Administrar y organizar el torneo de manera efectiva.</li>
                                <li>Notificar a los ganadores y otorgar los premios.</li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Protección de la Información:</strong>
                            <p className="pl-6">
                                La seguridad de tu información personal es de suma importancia. Se implementarán medidas de seguridad para proteger la información contra accesos no autorizados, uso indebido o divulgación.
                            </p>
                        </li>
                        <li className="mb-4">
                            <strong>No Compartir Información:</strong>
                            <p className="pl-6">
                                La información personal de los participantes no será compartida, vendida o alquilada a terceros, a menos que sea requerido por la ley.
                            </p>
                        </li>
                        <li className="mb-4">
                            <strong>Consentimiento:</strong>
                            <p className="pl-6">
                                Al participar en el torneo, los participantes otorgan su consentimiento para la recopilación y el uso de su información personal según se describe en esta política.
                            </p>
                        </li>
                        <li className="mb-4">
                            <strong>Cambios en la Política:</strong>
                            <p className="pl-6">
                                Esta política de privacidad está sujeta a cambios. Se notificarán cambios significativos a los participantes a través de la dirección de correo electrónico proporcionada.
                            </p>
                        </li>
                        <li className="mb-4">
                            <strong>Contacto:</strong>
                            <p className="pl-6">
                                Si tienes alguna pregunta o preocupación sobre esta política de privacidad, puedes contactar a Luis Martinez, el creador del torneo, a través del siguiente enlace: <a href="/contacto" className="text-blue-500">Contactar a Luis Martinez</a>.
                            </p>
                        </li>
                    </ol>
                    <p className="mt-4">
                        Al participar en el torneo, aceptas y consientes los términos de esta Política de Privacidad.
                    </p>
                </div>
            </div>
        </>
    );
};

export default PagePrivacyPolicy;
