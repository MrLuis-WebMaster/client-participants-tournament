
"use client"
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { ContextAuth } from '../Providers/ContextAuth';
import useNavigation from '@/hooks/useNavigation';


const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Por favor, introduce tu nombre completo.'),
    phone: Yup.string()
        .matches(/^\+[1-9]\d{1,14}$/, 'El número de teléfono debe comenzar con el prefijo del país, por ejemplo, +1234567890.')
        .required('El número de teléfono es requerido.'),
    age: Yup.number()
        .integer('La edad debe ser un número entero.')
        .min(17, 'Debes tener al menos 17 años para registrarte.')
        .moreThan(16, 'Debes tener al menos 17 años para registrarte.')
        .required('Por favor, introduce tu edad.'),
});


const FormProfile = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const { token, user } = useContext(ContextAuth);
    const { searchParams, router } = useNavigation();
    
    async function postData(url = '', data = {}) {
        try {
            setLoading(true)
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            toast.success('Tus datos fueron actualizados', {
                duration: 6000,
                position: 'top-center',

            })
            setTimeout(() => {
                if (searchParams.get('redirect_url').length) {
                    router.push(`${searchParams.get('redirect_url')}?redirect=true`)
                    return;
                }
                window.location.reload();
            }, 1000)
            return response.json();
        } catch (error) {
            toast.error('Hubo un error inesperado por favor ponte en contacto con soporte si el problema persiste', {
                duration: 6000,
                position: 'top-center',
            })
        } finally {
            setLoading(false)
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: user?.fullName || '',
            phone: user?.phone || '',
            age: user?.age || '',
        },
        validationSchema,
        onSubmit: (values) => {
            postData(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/participants/${user.id}`, {
                ...values
            })
        },
    });


    return (
        <div
            className="wow fadeInUp relative z-10 rounded-xl bg-primary/[3%] p-6 dark:bg-primary/10"
            data-wow-delay=".2s"
        >
            <form onSubmit={formik.handleSubmit}>
                <div className='mb-4 '>
                    <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        className="w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? (
                        <div className="text-red">{formik.errors.fullName}</div>
                    ) : null}
                </div>
                <div className='mb-4 '>
                    <label
                        htmlFor="age"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                        Edad
                    </label>
                    <input
                        type="number"
                        name="age"
                        min={17}
                        className="w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                    />
                    {formik.touched.age && formik.errors.age ? (
                        <div className="text-red">{formik.errors.age}</div>
                    ) : null}
                </div>
                <div className='mb-4 '>
                    <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                        Número de celular
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        className="w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-red">{formik.errors.phone}</div>
                    ) : null}
                </div>
                <button
                    className="duration-80 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none" 
                    type='submit' 
                    disabled={loading}
                > 
                    Actualizar
                </button>
            </form>
        </div>
    );
};

export default FormProfile;
