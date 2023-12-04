import Breadcrumb from '@/components/Common/Breadcrumb';
import FormRegister from '@/components/Contact/FormRegister';
import InformationTournament from '@/components/inscription/InformationTournament';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FreshWar | Inscripción',
  description: 'FreshWar',
}

async function getData(id:number) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/tournaments/${id}`, {
    method: 'GET',
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error(response.statusText)
  }
 
  return response.json()
}


const Bg = () => {
  return (
    <div className="absolute top-0 left-0 z-[-1]">
      <svg
        width="1440"
        height="969"
        viewBox="0 0 1440 969"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_95:1005"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1440"
          height="969"
        >
          <rect width="1440" height="969" fill="#090E34" />
        </mask>
        <g mask="url(#mask0_95:1005)">
          <path
            opacity="0.1"
            d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
            fill="url(#paint0_linear_95:1005)"
          />
          <path
            opacity="0.1"
            d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
            fill="url(#paint1_linear_95:1005)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_95:1005"
            x1="1178.4"
            y1="151.853"
            x2="780.959"
            y2="453.581"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_95:1005"
            x1="160.5"
            y1="220"
            x2="1099.45"
            y2="1192.04"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A6CF7" />
            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const InscripcionPage = async ({ params }: { params: { name: string, id: string, game: string } }) => {
  const tournament = await getData(Number(params.id));

  return (
    <>
      <Breadcrumb
        pageName="Inscripción"
        description="Es importante despues de el registro se te enviara un correo con todos los detalles."
      />
      <section className="relative z-10 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-5">
            <InformationTournament
              tournament={tournament}
            />
            <FormRegister
              tournament={tournament}
              showForm={tournament.status}
            />
          </div>
        </div>
        <Bg />
      </section>
    </>
  );
};



export default InscripcionPage;
