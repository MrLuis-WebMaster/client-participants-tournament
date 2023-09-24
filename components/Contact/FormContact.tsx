"use client"

import { useState } from "react"

const FormContact = () => {
    const [form, setForm] = useState({
        name: '',
        message: ''
    })

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSendEmail = (event) => {
        event.preventDefault();
        const subject = encodeURIComponent(`CONTACTO FRESH WAR - ${form.name}`);
        const body = encodeURIComponent(form.message);
        const mailtoLink = `mailto:mr.luiswebmaster@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    return (
        <div
            className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s
    "
        >
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Necesitas ayuda?
            </h2>
            <p className="mb-6 text-base font-medium text-body-color">
                Llena el formulario y nos pondremos en contacto via email o puedes enviar un correo a mr.luiswebmaster@gmail.com
            </p>
            <form onSubmit={handleSendEmail}>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mb-8">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                                Nombre Completo
                            </label>
                            <input
                                required
                                onChange={handleChange}
                                type="text"
                                name="name"
                                placeholder="Escribe tu nombre"
                                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            />
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <div className="mb-8">
                            <label
                                htmlFor="message"
                                className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                                Mensaje
                            </label>
                            <textarea
                                required
                                onChange={handleChange}
                                name="message"
                                rows={5}
                                placeholder="Escribe tu mensaje"
                                className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            ></textarea>
                        </div>
                    </div>
                    <div className="w-full px-4">
                        <button
                            type="submit"
                            className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                            disabled={form.name.length === 0 || form.message.length === 0}
                        >
                            Enviar
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default FormContact