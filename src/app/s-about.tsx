import { Button } from "@/components/ui/button";
import { aboutHomeData } from "@/data/home";
import { Check } from "lucide-react";
import Image from "next/image";

export function AboutHome() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 lg:px-8 py-8 mt-[500px]">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between">
        <figure className="w-full max-w-[500px] lg:max-w-[600px]">
          <Image
            src={aboutHomeData.img}
            width={1061}
            height={1061}
            alt="Imagem Kratos Jogo"
            className="w-full h-auto object-cover"
          />
        </figure>

        <article className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 w-full">
          <h1 className="text-3xl lg:text-[60px] bg-clip-text text-transparent bg-gradient-to-r from-[#FF9A51] to-[#E44963] font-bold text-center lg:text-left w-full font-oxanium">
            {aboutHomeData.title}
          </h1>

          <p className="text-center lg:text-left text-base lg:text-2xl text-white/70 font-light w-full">
            {aboutHomeData.description}
          </p>

          <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-6 w-full">
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 w-full">
              {aboutHomeData.features.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check
                    size={24}
                    className="text-[#FF9A51]"
                  />
                  <li className="text-base lg:text-xl list-none text-white/70 font-light">
                    {item.feature}
                  </li>
                </div>
              ))}
            </div>

            <Button className="w-full lg:w-[145px] lg:h-[38px]">Anunciar grátis</Button>
          </div>
        </article>
      </div>
    </section>
  );
}
