import Sidebar from "./components/Sidebar";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="relative z-10 overflow-hidden pt-[150px]">
            <div className="flex">
                <Sidebar/>
                <main className="relative flex w-full">
                    <div className="lg:mx-16 max-w-screen-2xl p-4 md:p-6 2xl:p-10 w-full">
                        {children}
                    </div>
                </main>
            </div>
        </section>
    )
}