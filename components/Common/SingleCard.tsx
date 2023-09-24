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
            <h2 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center mb-3">¡Triunfo y Recompensa!</h2>
          </div>
        </div>
        <p className="text-base leading-relaxed text-body-color">
          El premio para el primer lugar en FreshWar es más que una victoria, es una celebración del esfuerzo y habilidades demostradas en la arena de Call of Duty Mobile.
          <br />
          El campeón se llevará a casa un premio en efectivo de 400,000 pesos colombianos o su equivalente en 100 dólares estadounidenses.
          <br />
          Además, como reconocimiento a su excelencia, el ganador recibirá una entrada gratuita para la próxima edición del torneo, asegurando su participación en futuras batallas llenas de emoción y competencia.
          <br />
          ¡Este premio es solo el comienzo de una emocionante trayectoria en FreshWar!
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
