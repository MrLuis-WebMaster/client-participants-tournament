import { fullFormattedDateTime } from '@/utils/formatDateTime';
import React, { ChangeEvent, useState } from 'react';

interface CardRegisterTournamentProps {
    register: any
    handleDelete: () => void
}

const CardRegisterTournament = ({ register, handleDelete }: CardRegisterTournamentProps) => {
    const [activeTab, setActiveTab] = useState<string>('register');

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
    const handleTabChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setActiveTab(event.target.value);
    };

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-72 flex flex-col">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select tab
                </label>
                <select
                    id="tabs"
                    className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleTabChange}
                    value={activeTab}
                >
                    <option value="register">Registro</option>
                    <option value="tournament">Torneo</option>
                    <option value="organizer">Organizador</option>
                </select>
            </div>
            <ul
                className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
                id="fullWidthTab"
                data-tabs-toggle="#fullWidthTabContent"
                role="tablist"
            >
                <li className="w-full">
                    <button
                        id="register-tab"
                        data-tabs-target="#register"
                        type="button"
                        role="tab"
                        aria-controls="register"
                        aria-selected={activeTab === 'register'}
                        className={`inline-block w-full p-4 rounded-ss-lg dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none ${activeTab === 'register' ? 'dark:bg-primary text-white' : ''
                            }`}
                        onClick={() => handleTabClick('register')}
                    >
                        Registro
                    </button>
                </li>
                <li className="w-full">
                    <button
                        id="tournament-tab"
                        data-tabs-target="#tournament"
                        type="button"
                        role="tab"
                        aria-controls="tournament"
                        aria-selected={activeTab === 'tournament'}
                        className={`inline-block w-full p-4  dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none ${activeTab === 'tournament' ? 'dark:bg-primary text-white' : ''
                            }`}
                        onClick={() => handleTabClick('tournament')}
                    >
                        Torneo
                    </button>
                </li>
                <li className="w-full">
                    <button
                        id="organizer-tab"
                        data-tabs-target="#organizer"
                        type="button"
                        role="tab"
                        aria-controls="organizer"
                        aria-selected={activeTab === 'organizer'}
                        className={`inline-block w-full p-4 rounded-se-lg  dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none ${activeTab === 'organizer' ? 'dark:bg-primary text-white' : ''
                            }`}
                        onClick={() => handleTabClick('organizer')}
                    >
                        Organizador
                    </button>
                </li>
            </ul>
            <div className="border-t border-gray-200 dark:border-gray-600 text-sm">
                <div
                    className={`p-4 bg-white rounded-lg dark:bg-gray-800 ${activeTab === 'register' ? '' : 'hidden'
                        }`}
                    id="register"
                    role="tabpanel"
                    aria-labelledby="register-tab"
                >
                    <p>
                        Username de {register.tournament.game}: {register.userName}
                    </p>
                    <p>
                        Id de {register.tournament.game}: {register.userId}
                    </p>
                    <p className='capitalize'> Plataforma: {register.platform}</p>

                    {register.tournament.entryFee > 0 ? (
                        <p>
                            Pago: {register.isPaid ? (<span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Pagado</span>
                            ) : (<span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Pendiente</span>
                            )}
                        </p>
                    ) : (<p> La inscripción es Gratis </p>)}
                </div>
                <div
                    className={`p-4 bg-white rounded-lg dark:bg-gray-800 ${activeTab === 'tournament' ? '' : 'hidden'
                        }`}
                    id="tournament"
                    role="tabpanel"
                    aria-labelledby="tournament-tab"
                >
                    <p>
                        Nombre: {register.tournament.name}
                    </p>
                    <p> Juego: {register.tournament.game}</p>
                    <p className='capitalize'> Fecha: {fullFormattedDateTime(register.tournament.dateTime)}</p>
                    <p> Formato: {register.tournament.format} </p>
                    <p> Estado: {register.tournament.status} </p>
                    <p>
                        Reglas: <a href={register.tournament.rules} target="_blank" rel="noopener noreferrer" className='text-primary border-b'>Link</a>
                    </p>
                </div>
                <div
                    className={`p-4 bg-white rounded-lg dark:bg-gray-800 ${activeTab === 'organizer' ? '' : 'hidden'
                        }`}
                    id="organizer"
                    role="tabpanel"
                    aria-labelledby="organizer-tab"
                >
                    <p> Nombre: {register.tournament.nameOrganizer}</p>
                    <p> Celular: {register.tournament.phoneOrganizer}</p>
                    <p> Correo: {register.tournament.emailOrganizer} </p>
                </div>
            </div>
            <div className='flex items-center justify-end p-4 mt-auto'>
                {
                    !register.isPaid && (
                        <button
                            onClick={handleDelete}
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700"
                        >
                            <i className='bx bx-trash'></i>
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default CardRegisterTournament;
