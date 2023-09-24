const Slogan = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s"
            >
              <h1 className="text-xl text-center font-bold text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                FreshWar, la fiesta sin fin de adrenalina y estilo. 
                <br/>
                ¡Siente el flow, vive la batalla, y mantente always fresh!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
