"use client";
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import TournamentCard from '../cards/TournamentCard';

const SliderTournaments = ({ tournaments }: any) => {
  
  return (
    <Splide className='h-full' hasTrack={false} aria-label="Torneos" options={{
      rewind: true,
      pagination: false,
    }}>
      <SplideTrack className='h-full'>
        {
          tournaments.map((tournament: any) => {
            return (
              <SplideSlide key={tournament.id} className='h-full min-h-[420px] rounded-md flex justify-center' >
                <TournamentCard className="max-w-[24rem]" tournament={tournament} showMoreInfo={true}/>
              </SplideSlide>
            )
          })
        }
      </SplideTrack>
    </Splide>
  )
}

export default SliderTournaments