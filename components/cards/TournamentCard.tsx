'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { fullFormattedDateTime } from '@/utils/formatDateTime'

const TournamentCard = ({ tournament, showMoreInfo = false, className = "" }) => {
    return (
        <div className={`${className} min-w-[24rem] rounded-lg shadow bg-dark flex flex-col justify-between`}>
            <div className='relative w-full h-[200px]' >
                <Image style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                }} fill src={tournament.bannerLink} className="rounded-t-lg" alt={''} />
            </div>
            <div className="p-4 flex flex-col gap-3">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{tournament.name} ({tournament.game})</h5>
                <div className="text-xs text-gray-700 dark:text-gray-400">
                    <p className='mb-1 capitalize'>
                        <span className='font-bold'>Fecha:</span> {fullFormattedDateTime(tournament.dateTime)}
                    </p>
                    <p className='mb-1'>
                        <span className='font-bold'>Inscripcion:</span> {tournament.entryFee > 0 ? `$${tournament.entryFee} Dolares` : (<span className='bg-green p-1 text-white rounded-md text-xs'>Gratis</span>)}
                    </p>
                    <p className='mb-1'>
                        <span className='font-bold'>Premios:</span> <span dangerouslySetInnerHTML={{__html: tournament.prizes}} />
                    </p>
                    <p className='mb-1'>
                        <span className='font-bold'>Registro:</span>
                        {
                            tournament.status === 'Open' ? ' Abierto' :
                                tournament.status === 'Closed' ? ' Cerrado' :
                                    tournament.status === "Finished" ? ' Finalizado' : ''
                        }
                    </p>
                </div>
                <div className='flex flex-col gap-1'>
                    {
                        tournament.status === 'Open' ? <>
                            <Link href={`inscripcion/${tournament.name}/${tournament.id}/${tournament.game}`} className="rounded-md bg-primary py-3 px-6 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 text-center">
                                Inscríbirme
                            </Link>
                        </> :
                            tournament.status === 'Closed' ? <>
                                <button disabled className="rounded-md bg-primary/80 opacity-50 py-3 px-6 text-base font-semibold text-white text-center">
                                    Torneo cerrado
                                </button>
                            </> :
                                tournament.status === "Finished" ? <>
                                    <button disabled className="rounded-md bg-primary/80 opacity-50 py-3 px-6 text-base font-semibold text-white text-center">
                                        Torneo Finalizado
                                    </button>
                                </> : ''
                    }

                    {showMoreInfo && (
                        <>
                            <p className='text-center text-xs m-0'>o</p>
                            <Link className='text-center text-xs' href={`inscripcion/${tournament.name}/${tournament.id}/${tournament.game}`} >
                                Ver mas informacion
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TournamentCard