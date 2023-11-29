"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

    let storedSidebarExpanded = "true";
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
    );

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document.querySelector("body")?.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    return (
        <div className="flex-col">
            <button
                ref={trigger}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-controls="sidebar"
                aria-expanded={sidebarOpen}
                className="block z-[1] left-0 top-[128px] text-center px-3 py-1 absolute lg:hidden"
            >
                <i className='bx bx-menu'></i>
            </button>

            <aside
                ref={sidebar}
                className={`absolute left-0 top-[128px] z-[999] flex h-full min-w-[12rem] flex-col overflow-y-hidden bg-dark duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                    <nav className="py-4 px-4">
                        <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                                <h3 className="text-sm font-semibold text-bodydark2">
                                    MENU
                                </h3>
                                <button
                                    ref={trigger}
                                    onClick={() => setSidebarOpen(!sidebarOpen)}
                                    aria-controls="sidebar"
                                    aria-expanded={sidebarOpen}
                                    className="block lg:hidden"
                                >
                                    <i className='bx bx-x'></i>
                                </button>
                            </div>
                            <ul className="mb-6 flex flex-col gap-1.5">
                                <li>
                                    <Link
                                        href="/account/profile"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("/account/profile") &&
                                            "bg-graydark dark:bg-meta-4"
                                            }`}
                                    >
                                        <i className='bx bx-user'></i>
                                        Perfil
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/account/my-tournaments"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("/account/my-tournaments") &&
                                            "bg-graydark dark:bg-meta-4"
                                            }`}
                                    >
                                        <i className='bx bx-dice-6'></i>
                                        Torneos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
