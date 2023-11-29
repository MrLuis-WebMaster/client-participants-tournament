import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import User from "@/types/User";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

interface Props {
    user: User;
    session: Session
}

const DropdownUser = ({user, session }:Props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <div className="relative">
            <Link
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2"
                href="#"
                role="button"
            >
                <span className="hidden text-right lg:block">
                    <span className="block text-sm font-medium text-black dark:text-white">
                        {user?.fullName}
                    </span>
                </span>

                <span className="h-12 w-12 rounded-full">
                    <Image
                        width={48}
                        height={48}
                        src={session.user.image}
                        alt={user.fullName}
                        className="rounded-full overflow-hidden"
                    />
                </span>

                <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                        fill=""
                    />
                </svg>
            </Link>

            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-dark shadow-default ${dropdownOpen === true ? "block" : "hidden"
                    }`}
            >
                <ul className="flex flex-col gap-5 border-b p-3">
                    <li>
                        <Link
                            href="/account/profile"
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        >
                            <i className='bx bx-user'></i>
                            Mi Perfil
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/account/my-tournaments"
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                        >
                            <i className='bx bx-dice-6'></i>
                            Mis Torneos
                        </Link>
                    </li>
                </ul>
                <button
                    onClick={() => signOut({ callbackUrl: '/' })} 
                    className="flex items-center gap-3.5 p-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                >
                    <i className='bx bx-log-out'></i>
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
};

export default DropdownUser;
