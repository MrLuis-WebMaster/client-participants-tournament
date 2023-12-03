"use client";
import { useState, useEffect, useMemo, useContext } from "react";
import Pagination from "@/components/Common/Pagination";
import useNavigation from "@/hooks/useNavigation";
import { ContextAuth } from "../Providers/ContextAuth";
import CardRegisterTournament from "@/app/account/components/CardRegisterTournament";
import User from "@/types/User";
import toast from "react-hot-toast";

const MyTournamentPageComponent = () => {
    const { navigateWithQueryParam, searchParams } = useNavigation();
    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1);
    const [registers, setRegisters] = useState([]);
    const [totalRegisters, setTotalRegisters] = useState(0);
    const [loading, setLoading] = useState(true);
    const [loadingEmail, setLoadingEmail] = useState(false);
    const { user, token } = useContext(ContextAuth);

    const itemsPerPage = 6;

    const fetchData = useMemo(() => async (page: number) => {
        try {
            setLoading(true);
            const url = `${process.env.NEXT_PUBLIC_ENDPOINT_API}/tournament-participant/participant-by-tournaments/${user.email}?page=${page}&pageSize=${itemsPerPage}&searchTerm=${''}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (!response.ok) {
                console.log(response);
                return;
            }

            const data = await response.json();
            setRegisters(data.registers);
            setTotalRegisters(data.total);
            setLoading(false);

        } catch (error) {
            console.log(error)
        }
    }, [user?.email, token]);


    useEffect(() => {
        if (user?.email) {
            fetchData(currentPage);
        }
    }, [fetchData, currentPage, user?.email]);


    const paginateFront = () => {
        setCurrentPage(currentPage + 1)
        navigateWithQueryParam('page', (currentPage + 1).toString())
    };

    const paginateBack = () => {
        setCurrentPage(currentPage - 1)
        navigateWithQueryParam('page', (currentPage - 1).toString())
    };

    const goToPage = (currentPage: number) => {
        setCurrentPage(currentPage)
        navigateWithQueryParam('page', (currentPage).toString())
    };

    const sendNotificationEmail = async (user: User) => {
        try {
            setLoadingEmail(true);
            const url = `${process.env.NEXT_PUBLIC_ENDPOINT_API}/emails/notification-admin`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                console.log(response);
                return;
            }
            toast.success('Se les ha notificado a los admin tu interes en organizar un torneo y se pondran en contacto contigo.', {
                duration: 10000,
                position: 'top-center',
            })
        } catch (error) {
            toast.error('Hubo un error al enviar la notificación a los admin', {
                duration: 6000,
                position: 'top-center',
            })
        } finally {
            setLoadingEmail(false);
        }
    }

    
    const handleDelete = (tournamentId:number) => {
        toast((t) => (
            <span>
                <p className='text-xl mb-3'>
                    ¿Estas seguro de querer eliminar tu registro?
                </p>
                <div className='flex gap-2'>
                    <button 
                        className="w-[50%] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-base px-5 py-2.5  dark:text-dark dark:hover:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
                        onClick={() => toast.dismiss(t.id)}
                    >
                        Cancelar
                    </button>
                    <button 
                        className="w-[50%] focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700"
                        onClick={() => handleDeleteConfirm(t.id, tournamentId)}
                    >
                        Aceptar
                    </button>
                </div>
            </span>
        ), {
            id: 'warning',
            icon: '⚠️',
            duration: 50000
        });
    }

    const handleDeleteConfirm = (id: string, tournamentId:number) => {
        toast.dismiss(id)
        setLoading(true)
        const fetchDelete = async ():Promise<unknown> => {
            try {                
                const url = `${process.env.NEXT_PUBLIC_ENDPOINT_API}/tournament-participant/${tournamentId}/${user?.id}`;
                const response = await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(user)
                });
                return response;
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        };

        toast.promise(fetchDelete(), {
            loading: 'Borrando...',
            success: () => {
                fetchData(currentPage);
                return 'Registro eliminado';
            },
            error: 'Ups, hubo un error, si el error persiste ponte en contacto con soporte.',
        });
    }


    return (
        <>
            <div className="min-h-screen">
                <button 
                    className="ease-in-up rounded-md bg-primary py-2 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:px-9 lg:px-6 xl:px-9 mb-6"
                    onClick={() => sendNotificationEmail(user)}
                    disabled={loadingEmail}
                >
                    Me gustaria organizar mi propio torneo
                </button>
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
                        {[1, 2, 3, 4, 5, 6].map((item: number) => (
                            <div key={item}  role="status" className="hidden max-w-sm animate-pulse md:block">
                                <div className="rounded-md bg-body-color w-full md:px-9 lg:px-6 xl:px-9 h-72"></div>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ))}
                    </div>
                )
                    : !totalRegisters && !loading ? (
                        <p className="text-center">No se encontraron resultados.</p>
                    ) : (
                        <>
                            <h1 className='text-center text-2xl mb-6'>Torneos Inscritos ({totalRegisters})</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
                                {
                                    registers.map((register: any) => {
                                        return (
                                            <CardRegisterTournament key={register.tournament.id} register={register} handleDelete={() => handleDelete(register.tournament.id)} />
                                        )
                                    })
                                }
                            </div>
                        </>
                    )}
                {totalRegisters > itemsPerPage && (
                    <Pagination
                        page={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalCount={totalRegisters}
                        goToNextPage={paginateFront}
                        goToPreviousPage={paginateBack}
                        goToPage={goToPage}
                    />
                )}
            </div>
        </>
    );
};


export default MyTournamentPageComponent;
