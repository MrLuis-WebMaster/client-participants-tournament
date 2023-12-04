
import type { Metadata } from 'next'

import TorneoPageComponent from "@/components/tournaments/Tournaments";
export const metadata: Metadata = {
  title: 'FreshWar | Torneos',
  description: 'FreshWars',
}

const TorneoPage = () => {
  return (
    <>
      <TorneoPageComponent />
    </>
  );
};


export default TorneoPage;
