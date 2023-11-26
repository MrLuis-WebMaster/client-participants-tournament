
"use client"
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { ContextAuth } from '../Providers/ContextAuth';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const BG = () => {
  return (
    <div className="absolute top-0 left-0 z-[-1]">
      <svg
        width="370"
        height="596"
        viewBox="0 0 370 596"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_88:141"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="370"
          height="596"
        >
          <rect width="370" height="596" rx="2" fill="#1D2144" />
        </mask>
        <g mask="url(#mask0_88:141)">
          <path
            opacity="0.15"
            d="M15.4076 50.9571L54.1541 99.0711L71.4489 35.1605L15.4076 50.9571Z"
            fill="url(#paint0_linear_88:141)"
          />
          <path
            opacity="0.15"
            d="M20.7137 501.422L44.6431 474.241L6 470.624L20.7137 501.422Z"
            fill="url(#paint1_linear_88:141)"
          />
          <path
            opacity="0.1"
            d="M331.676 198.309C344.398 204.636 359.168 194.704 358.107 180.536C357.12 167.363 342.941 159.531 331.265 165.71C318.077 172.69 318.317 191.664 331.676 198.309Z"
            fill="url(#paint2_linear_88:141)"
          />
          <g opacity="0.3">
            <path
              d="M209 89.9999C216 77.3332 235.7 50.7999 258.5 45.9999C287 39.9999 303 41.9999 314 30.4999C325 18.9999 334 -3.50014 357 -3.50014C380 -3.50014 395 4.99986 408.5 -8.50014C422 -22.0001 418.5 -46.0001 452 -37.5001C478.8 -30.7001 515.167 -45 530 -53"
              stroke="url(#paint3_linear_88:141)"
            />
            <path
              d="M251 64.9999C258 52.3332 277.7 25.7999 300.5 20.9999C329 14.9999 345 16.9999 356 5.49986C367 -6.00014 376 -28.5001 399 -28.5001C422 -28.5001 437 -20.0001 450.5 -33.5001C464 -47.0001 460.5 -71.0001 494 -62.5001C520.8 -55.7001 557.167 -70 572 -78"
              stroke="url(#paint4_linear_88:141)"
            />
            <path
              d="M212 73.9999C219 61.3332 238.7 34.7999 261.5 29.9999C290 23.9999 306 25.9999 317 14.4999C328 2.99986 337 -19.5001 360 -19.5001C383 -19.5001 398 -11.0001 411.5 -24.5001C425 -38.0001 421.5 -62.0001 455 -53.5001C481.8 -46.7001 518.167 -61 533 -69"
              stroke="url(#paint5_linear_88:141)"
            />
            <path
              d="M249 40.9999C256 28.3332 275.7 1.79986 298.5 -3.00014C327 -9.00014 343 -7.00014 354 -18.5001C365 -30.0001 374 -52.5001 397 -52.5001C420 -52.5001 435 -44.0001 448.5 -57.5001C462 -71.0001 458.5 -95.0001 492 -86.5001C518.8 -79.7001 555.167 -94 570 -102"
              stroke="url(#paint6_linear_88:141)"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_88:141"
            x1="13.4497"
            y1="63.5059"
            x2="81.144"
            y2="41.5072"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_88:141"
            x1="28.1579"
            y1="501.301"
            x2="8.69936"
            y2="464.391"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_88:141"
            x1="338"
            y1="167"
            x2="349.488"
            y2="200.004"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_88:141"
            x1="369.5"
            y1="-53"
            x2="369.5"
            y2="89.9999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_88:141"
            x1="411.5"
            y1="-78"
            x2="411.5"
            y2="64.9999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_88:141"
            x1="372.5"
            y1="-69"
            x2="372.5"
            y2="73.9999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_88:141"
            x1="409.5"
            y1="-102"
            x2="409.5"
            y2="40.9999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Por favor, introduce tu nombre completo.'),
  email: Yup.string()
    .email('Introduce una dirección de correo electrónico válida.')
    .required('El correo electrónico es requerido.'),
  phone: Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/, 'El número de teléfono debe comenzar con el prefijo del país, por ejemplo, +1234567890.')
    .required('El número de teléfono es requerido.'),
  userName: Yup.string().required('Por favor, introduce tu nombre de usuario.'),
  userId: Yup.string().required('Por favor, introduce tu ID.'),
  age: Yup.number()
    .integer('La edad debe ser un número entero.')
    .min(17, 'Debes tener al menos 17 años para registrarte.')
    .moreThan(16, 'Debes tener al menos 17 años para registrarte.')
    .required('Por favor, introduce tu edad.'),
  platform: Yup.string().required('Por favor, ingresa la plataforma donde juegas.'),
  acceptTerms: Yup.boolean().oneOf([true], 'Debe aceptar los términos y condiciones para continuar.'),
});


const FormRegister = ({ tournament, showForm }: {
  tournament: {
    name?: string,
    id?: string,
    game?: string
  }, showForm?: string
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { token, user, status } = useContext(ContextAuth);

  async function postData(url = '', data = {}) {
    try {
      setLoading(true)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      toast.success('Tu registro fue enviado', {
        duration: 6000,
        position: 'top-center',

      })
      formik.resetForm();
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
      email: user?.email || '',
      phone: user?.phone || '',
      userName: '',
      userId: '',
      age: user?.age || '',
      platform: '',
      acceptTerms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      postData(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/tournament-participant`, {
        tournamentId: Number(tournament.id),
        participantData: values
      })
    },
  });

  return (
    <div
      className="wow fadeInUp relative z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Formulario de Inscripción para {tournament.name} ({tournament.game})
      </h3>
      {
        status === "loading" || (status !== "loading" && !user)
          ? (
              <>
                <div role="status" className="hidden w-full animate-pulse md:block">
                    <div className="rounded-md bg-body-color w-24 md:px-9 lg:px-6 xl:px-9 h-5 mb-3"></div>
                    <div className="rounded-md bg-body-color w-full md:px-9 lg:px-6 xl:px-9 h-12 mb-4"></div>
                    <div className="rounded-md bg-body-color w-24 md:px-9 lg:px-6 xl:px-9 h-5 mb-3"></div>
                    <div className="rounded-md bg-body-color w-full md:px-9 lg:px-6 xl:px-9 h-12 mb-4"></div>
                    <div className="rounded-md bg-body-color w-24 md:px-9 lg:px-6 xl:px-9 h-5 mb-3"></div>
                    <div className="rounded-md bg-body-color w-full md:px-9 lg:px-6 xl:px-9 h-12 mb-4"></div>
                    <div className="rounded-md bg-body-color w-24 md:px-9 lg:px-6 xl:px-9 h-5 mb-3"></div>
                    <div className="rounded-md bg-body-color w-full md:px-9 lg:px-6 xl:px-9 h-12 mb-4"></div>
                    <div className="rounded-md bg-body-color w-24 md:px-9 lg:px-6 xl:px-9 h-5 mb-3"></div>
                    <div className="rounded-md bg-body-color w-full md:px-9 lg:px-6 xl:px-9 h-12 mb-4"></div>
                    <div className="rounded-md bg-body-color w-24 md:px-9 lg:px-6 xl:px-9 h-5 mb-3"></div>
                    <div className="rounded-md bg-body-color w-full md:px-9 lg:px-6 xl:px-9 h-12 mb-4"></div>
                    <div className="rounded-md bg-body-color w-24 md:px-9 lg:px-6 xl:px-9 h-5 mb-3"></div>
                    <div className="rounded-md bg-body-color w-full md:px-9 lg:px-6 xl:px-9 h-12 mb-4"></div>
                    <div className="rounded-md bg-body-color w-full md:px-9 lg:px-6 xl:px-9 h-5 mb-3"></div>
                    <div className="rounded-md bg-body-color w-24 md:px-9 lg:px-6 xl:px-9 h-5 mb-3"></div>
                    <div className="rounded-md bg-body-color w-full md:px-9 lg:px-6 xl:px-9 h-16 mb-4"></div>

                    <span className="sr-only">Loading...</span>
                </div>
              </>
          )
          : status === "authenticated" ?
            !user?.age || !user?.phone ? (
              <div className='flex flex-col gap-3 mt-24'>
                <p className='text-2xl text-center'>Actualiza los datos de tu perfil, para continuar con el registro.</p>
                <Link
                  href="/profile"
                  className="ease-in-up hidden rounded-md bg-primary py-2 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9 text-center"
                >
                  Actualizar perfil
                </Link>
              </div>
            ) : (
              <>
                {(showForm !== 'Finished' && showForm !== 'Closed') && (
                  <>
                    <p className="mb-6 border-b border-body-color border-opacity-25 pb-4 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
                      Llena los campos
                    </p>
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
                          readOnly
                          disabled
                        />
                        {formik.touched.fullName && formik.errors.fullName ? (
                          <div className="text-red">{formik.errors.fullName}</div>
                        ) : null}
                      </div>
                      <div className='mb-4 '>
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Correo
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          readOnly
                          disabled
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-red">{formik.errors.email}</div>
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
                          readOnly
                          disabled
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
                          readOnly
                          disabled
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                          <div className="text-red">{formik.errors.phone}</div>
                        ) : null}
                      </div>
                      <div className='mb-4 '>
                        <label
                          htmlFor="userName"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Nombre de usuario en {tournament.game}
                        </label>
                        <input
                          type="text"
                          name="userName"
                          className="w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.userName}
                        />
                        {formik.touched.userName && formik.errors.userName ? (
                          <div className="text-red">{formik.errors.userName}</div>
                        ) : null}
                      </div>
                      <div className='mb-4 '>
                        <label
                          htmlFor="userId"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Id de usuario en {tournament.game}
                        </label>
                        <input
                          type="text"
                          name="userId"
                          className="w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.userId}
                        />
                        {formik.touched.userId && formik.errors.userId ? (
                          <div className="text-red">{formik.errors.userId}</div>
                        ) : null}
                      </div>

                      <div className='mb-4 '>
                        <label
                          htmlFor="platform"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Plataforma donde juegas (android/ios/otro)
                        </label>
                        <input
                          type="text"
                          name="platform"
                          className="w-full rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.platform}
                        />
                        {formik.touched.platform && formik.errors.platform ? (
                          <div className="text-red">{formik.errors.platform}</div>
                        ) : null}
                      </div>
                      <div className='mb-4'>
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formik.values.acceptTerms}
                            onChange={formik.handleChange}
                            className="mr-2"
                          />
                          Aceptar
                          <a className='border-b' href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer"> términos y condiciones</a>
                        </label>
                        {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
                          <div className="text-red">{formik.errors.acceptTerms}</div>
                        ) : null}
                      </div>
                      <div className="mb-4">
                        <p className="text-red text-2xl font-bold">¡Importante!</p>
                        <p>
                          Después de enviar tu registro, revisa tu bandeja de entrada <span className="text-yellow-500">urgentemente</span>, incluido el spam o correo no deseado, ya que a veces nuestros mensajes pueden colarse allí.
                        </p>
                      </div>
                      <button className="duration-80 mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none" type='submit' disabled={loading} >Enviar</button>
                    </form>
                  </>
                )}
                {showForm === 'Close' && (
                  <p className="my-6 border-b border-body-color border-opacity-25 pb-4 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
                    Las inscripciones aun estan cerradas.
                  </p>
                )}
                {showForm === 'Finished' && (
                  <p className="my-6 border-b border-body-color border-opacity-25 pb-4 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
                    Este torneo ha finalizado.
                  </p>
                )}
              </>
            )

            : (
              <div className='flex flex-col gap-3 mt-24'>
                <p className='text-2xl text-center'>Inicia sesión para poder registrarte.</p>
                <button
                  onClick={() => signIn('google')}
                  className="ease-in-up hidden rounded-md bg-primary py-2 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Iniciar Sesión
                </button>
              </div>
            )
      }
      <BG />
    </div>
  );
};

export default FormRegister;
