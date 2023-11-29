import React from "react"
import CardProfile from "@/components/Profile/CardProfile"

import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'FreshWar | Perfil',
    description: 'FreshWar',
}
const Page = () => {
    return (
        <>
            <CardProfile />
        </>
    )
}

export default Page