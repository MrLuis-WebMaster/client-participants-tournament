import React from 'react'
import { fullFormattedDateTime } from '@/utils/formatDateTime'
import Image from 'next/image';
import { LinkIcon, PuzzlePieceIcon, UserIcon, GiftIcon, CurrencyDollarIcon, AtSymbolIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid';



function getStatusColorClass(status: string) {
    switch (status) {
        case 'Open':
            return 'bg-green text-white';
        case 'Closed':
            return 'bg-red text-white';
        case 'Finished':
            return 'bg-gray text-white';
        default:
            return 'bg-gray text-white';
    }
}

function TournamentStatus({ status }: { status: string }) {
    const colorClass = getStatusColorClass(status);

    return (
        <span className={`rounded-md px-2 py-1 ${colorClass}`}>
            {status === 'Open' ? 'Abierto' : status === 'Closed' ? 'Cerrado' : status === 'Finished' ? 'Finalizado' : ''}
        </span>
    );
}


const InformationTournament = ({ tournament }: any) => {
    return (
        <>
            <div className=' bg-dark/60 rounded-md overflow-hidden'>
                <div className='relative h-48'>
                    <Image src={tournament.bannerLink} fill style={{ objectFit: 'cover', objectPosition: 'center center' }} alt={''} />
                </div>
                <div className='p-8 sm:p-11 lg:p-8 xl:p-11'>
                    <h3 className="text-4xl font-semibold leading-7 text-primary">{tournament.name}</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6">Información detallada del torneo</p>
                    <div className="mt-6 border-y border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6">Juego</dt>
                                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                                    <span className='flex items-center'>
                                        <PuzzlePieceIcon className="w-4 h-4 mr-2" />
                                        {tournament.game}
                                    </span>
                                </dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6">Formato</dt>
                                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 capitalize">{tournament.format}</dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6">Inscripción</dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">

                                    <span className='flex items-center'>
                                        <CurrencyDollarIcon className="w-4 h-4 mr-2" />
                                        {tournament.entryFee > 0 ? `$${tournament.entryFee} Dolares` : (<span className='bg-green p-1 text-white rounded-md'>Gratis</span>)}
                                    </span>
                                </dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6">Cantidad de participantes</dt>
                                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                                    <span className='flex items-center'>
                                        <UserIcon className="w-4 h-4 mr-2" />
                                        {tournament.maxParticipants}
                                    </span>
                                </dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6">Reglas</dt>
                                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                                    <span className="flex items-center">
                                        <LinkIcon className="w-4 h-4 mr-2" />
                                        <a className='text-primary border-b' href={tournament.rules} target="_blank" rel="noopener noreferrer">
                                            Haz click aquí
                                        </a>
                                    </span>
                                </dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6">Premios</dt>
                                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                                    <span className='flex items-center'>
                                        <GiftIcon className="w-4 h-4 mr-2 shrink-0" />
                                        <div
                                            dangerouslySetInnerHTML={{ __html: tournament.prizes }}
                                        />
                                    </span>
                                </dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6">Fecha</dt>
                                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 capitalize">{fullFormattedDateTime(tournament.dateTime)}</dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6">Estado</dt>
                                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                                    <TournamentStatus status={tournament.status} />
                                </dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6">Nombre del Organizador</dt>
                                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                                    <span className='flex items-center'>
                                        <UserIcon className="w-4 h-4 mr-2" />
                                        {tournament.nameOrganizer}
                                    </span>
                                </dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6">Correo del Organizador</dt>
                                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                                    <span className="flex items-center">
                                        <AtSymbolIcon className="w-4 h-4 mr-2" />
                                        <a className='text-primary' href={`mailto:${tournament.emailOrganizer}`}>
                                            {tournament.emailOrganizer}
                                        </a>
                                    </span>
                                </dd>
                            </div>
                            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium leading-6"># Celular del Organizador</dt>
                                <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                                    <span className='flex items-center'>
                                        <DevicePhoneMobileIcon className="w-4 h-4 mr-2" />
                                        {tournament.phoneOrganizer}
                                    </span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <p className="mt-1 max-w-2xl text-sm leading-6" dangerouslySetInnerHTML={{ __html: tournament.description }} />
                </div>
            </div>
        </>
    )
}

export default InformationTournament