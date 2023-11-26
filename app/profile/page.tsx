import React from "react"
import CardProfile from "@/components/Profile/CardProfile"

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'FreshWar Torneo | Perfil',
  description: 'FreshWar Torneo',
}
const Page = () => {
    return (
        <>
            <section className="relative z-10 overflow-hidden py-28 lg:py-[150px]">
                <div className="container">
                    <CardProfile/>
                </div>
            </section>
        </>
    )
}

export default Page