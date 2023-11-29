/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Breadcrumb from '@/components/Common/Breadcrumb';
export const metadata: Metadata = {
    title: 'FreshWar | Terminos y condiciones',
    description: 'FreshWar',
}
const PageTermsAndConditions = () => {
    return (
        <>
            <Breadcrumb
                pageName="Términos y Condiciones"
                description="Al participar en algun torneo, aceptas los siguientes términos y condiciones:"
            />
            <div className="container mx-auto pb-24 ">
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg">
                    <ol className="list-decimal pl-6 mt-4">
                        <li className="mb-4">
                            <strong>Elegibilidad:</strong>
                            <ul className="list-disc pl-6">
                                <li>El torneo está abierto para jugadores de Call of Duty Mobile de todas las edades.</li>
                                <li>Los participantes deben cumplir con las reglas y requisitos establecidos en las bases del torneo.</li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Inscripción y Cuota:</strong>
                            <ul className="list-disc pl-6">
                                <li>
                                    Para inscribirte en el torneo, es obligatorio completar el formulario de inscripción en línea y pagar la cuota de inscripción (solo para torneos de pago).
                                </li>
                                <li>La cuota de inscripción es no reembolsable.</li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Juego Limpio y Comportamiento Adecuado:</strong>
                            <ul className="list-disc pl-6">
                                <li>
                                    Se espera que todos los participantes mantengan un comportamiento deportivo y ético durante todo el torneo.
                                </li>
                                <li>Cualquier forma de trampa o comportamiento antideportivo resultará en la descalificación inmediata.</li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Reglas del Juego:</strong>
                            <ul className="list-disc pl-6">
                                <li>Los participantes deben seguir las reglas y mecánicas del juego establecidas por el equipo organizador.</li>
                                <li>Cualquier violación de las reglas del juego puede resultar en sanciones y descalificación.</li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Premios:</strong>
                            <ul className="list-disc pl-6">
                                <li>
                                    Los premios estaran en cada descripcion del torneo, los cuales Freshwar y organizados de torneos se encuentran en la obligación de entregarlo, para recompensar a los participantes.
                                </li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Problemas Técnicos:</strong>
                            <ul className="list-disc pl-6">
                                <li>El organizador no será responsable de problemas técnicos que puedan afectar la participación o los resultados del torneo.</li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Privacidad:</strong>
                            <ul className="list-disc pl-6">
                                <li>
                                    La información personal proporcionada durante la inscripción será utilizada únicamente para fines relacionados con el torneo y no será compartida con terceros.
                                </li>
                            </ul>
                        </li>
                        <li className="mb-4">
                            <strong>Contacto:</strong>
                            <ul className="list-disc pl-6">
                                <li>
                                    Para cualquier consulta, problema o soporte técnico, puedes contactar a Luis Martinez, el creador del torneo, a través del siguiente enlace: <a href="/contacto" className="text-primary">Contactar a Luis Martinez</a>.
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <p className="mt-4">
                        Al participar en el torneo, confirmas que has leído y aceptado estos términos y condiciones. El incumplimiento de estos términos puede resultar en descalificación.
                    </p>
                </div>
            </div>
        </>
    );
};

export default PageTermsAndConditions;
