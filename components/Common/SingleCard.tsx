import Image from "next/image";


const SingleCard = () => {

  return (
    <div className="w-full lg:w-6/12">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="flex flex-col items-center gap-3 border-b border-body-color border-opacity-10 pb-3 mb-3 dark:border-white dark:border-opacity-10 dark:text-white">
          <div className="relative mr-4 h-[150px] w-full max-w-[150px] overflow-hidden rounded-full">
            <Image src={'/images/throphy.svg'} alt={'Icon'} fill />
          </div>
          <div className="w-full">
            <h2 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center mb-3">¡Celebra tus Triunfos en FreshWar!</h2>
          </div>
        </div>
        <p className="text-base leading-relaxed text-body-color">
          En FreshWar, premiamos el esfuerzo y las habilidades que demuestras en la emocionante arena de los torneos. ¡Te espera una recompensa especial para celebrar tus victorias!
          <br />
          Cada evento en FreshWar ofrece premios que varían según la competencia. Los ganadores tienen la oportunidad de llevarse a casa premios en efectivo, objetos valiosos y mucho más. Además, como un reconocimiento a tu excelencia, recibirás una entrada gratuita para futuras ediciones de nuestros torneos. Esto garantiza tu participación en emocionantes batallas por venir, llenas de competencia y diversión.
          <br />
          Estos premios son solo el comienzo de tu emocionante viaje en FreshWar. ¡Te esperan desafíos continuos y recompensas que celebrarán tus habilidades una y otra vez!
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
