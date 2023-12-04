import type { Metadata } from 'next';
import MyTournamentPageComponent from '@/components/tournaments/MyTournaments';

export const metadata: Metadata = {
  title: 'FreshWar | Mis torneos',
  description: 'FreshWar',
}

const Page = async () => {

  return (
    <>
      <MyTournamentPageComponent/>
    </>
  )
}

export default Page