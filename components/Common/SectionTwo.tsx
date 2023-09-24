import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { sectionTitleType } from "@/types/sectionTitle";

const SectionTwo = ({title, paragraph, image }:sectionTitleType) => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src={image}
                alt="image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[500px]" data-wow-delay=".2s">
              <div className="mb-9">
                <SectionTitle
                  title={title}
                  paragraph={paragraph}
                  mb="44px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
