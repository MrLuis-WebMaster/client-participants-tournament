"use client";
import Image from "next/image";
import { useContext } from "react";
import { ContextAuth } from "../Providers/ContextAuth";
import FormProfile from "./FormProfile";

const CardProfile = () => {
    const { session, user } = useContext(ContextAuth);
    return (
        <>
            {
                session && (
                    <div className="bg-dark rounded-[1.75rem] shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full max-w-[50%] flex-col bg-cover bg-clip-border p-[16px]">
                        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" style={{ backgroundImage: 'url("https://i.ibb.co/FWggPq1/banner.png")' }}>
                            <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
                                <Image fill className="h-full w-full rounded-full" src={session.user.image} alt={session.user.name} />
                            </div>
                        </div>
                        <div className="mt-16 flex flex-col items-center">
                            <h4 className="text-primary text-xl font-bold">{user?.fullName}</h4>
                            <p className="text-body-color text-base font-normal">{session.user.email}</p>
                        </div>
                        <div className="mt-6">
                            <FormProfile />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default CardProfile