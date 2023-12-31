import Link from "next/link";
import Logo from "../Common/Logo";


const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-white dark:bg-dark bg-opacity-4 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-3 inline-block">
                  <Logo/>
                </Link>
                <p className="mb-5 text-base font-medium leading-relaxed text-body-color">
                  FreshWar, la fiesta sin fin de adrenalina y estilo.
                  ¡Siente el flow, vive la batalla, y mantente always fresh!
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.instagram.com/freshwar_/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="social-link"
                    className="mr-4 text-[#CED3F6] hover:text-primary text-xl"
                  >
                    <i className='bx bxl-instagram'></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61551865721972"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="social-link"
                    className="mr-4 text-[#CED3F6] hover:text-primary text-xl"
                  >
                    <i className='bx bxl-facebook'></i>
                  </a>
                  <a
                    href="https://discord.gg/drkAm8Ea"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="social-link"
                    className="mr-4 text-[#CED3F6] hover:text-primary text-xl"
                  >
                    <i className='bx bxl-discord'></i>
                  </a>
                  <a
                    href="https://wa.link/3z8vat"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="social-link"
                    className="mr-4 text-[#CED3F6] hover:text-primary text-xl"
                  >
                    <i className='bx bxl-whatsapp'></i>
                  </a>
                  <a
                    href="https://mrluisdev.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="social-link"
                    className="mr-4 text-[#CED3F6] hover:text-primary text-xl"
                  >
                    <i className='bx bx-globe' ></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/luismartinez-javascript/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="social-link"
                    className="mr-4 text-[#CED3F6] hover:text-primary text-xl"
                  >
                    <i className='bx bxl-linkedin-square' ></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Enlaces
                </h2>
                <ul>
                  <li>
                    <a
                      href="/torneos"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Torneos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/nosotros"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Nosotros
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Términos y Políticas
                </h2>
                <ul>
                  <li>
                    <a
                      href="/terminos-y-condiciones"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Términos y condiciones
                    </a>
                  </li>
                  <li>
                    <a
                      href="/politica-de-privacidad"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Política de privacidad
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Soporte & Ayuda
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Contáctanos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black/60 py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
              Created with ❤️ by <a className="border-b border-body-color" href="https://mrluisdev.vercel.app" rel="nofollow noopener">Luis Martinez</a>
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-24 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
