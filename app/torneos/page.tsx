
import type { Metadata } from 'next'

import TorneoPageComponent from "@/components/tournaments/Tournaments";
export const metadata: Metadata = {
  title: 'FreshWar Torneo | Torneos',
  description: 'FreshWar Torneos',
}

const TorneoPage = () => {
  return (
    <>
      <TorneoPageComponent />
    </>
  );
};


export default TorneoPage;
