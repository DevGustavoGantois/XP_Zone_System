import Image from "next/image";

export function CTAHome() {

//Ajustar essa imagem do background, pois está errada.

  return (
    <section>
    <Image src="/bgCTA.svg" alt="" width={1400} height={1200} className="w-full h-auto object-cover absolute right-0 left-0 bottom-0 -top-20 -z-50" />
      <div className="max-w-[1440px] mx-auto p-8 lg:p-0 z-10 relative">
        <div className="mt-[100px]">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6">
            <h1 className="text-4xl font-bold lg:text-[60px] text-center lg:text-start text-white max-w-[600px]">
              Compre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A51] to-[#E44963]">
                {" "}
                os melhores artigos gamers na sua cidade!
              </span>
            </h1>
            <p className="text-2xl font-light text-white/70 text-start max-w-[500px]">
              Nunca foi tão fácil conseguir aquele jogo ou console tão sonhado
              com a XP Zone.
            </p>
          </div>
          <div className="w-full lg:w-[521px] px-4 py-5 rounded-xl bg-white/5 backdrop-blur-3xl shadow-md mt-4">
            <div className="flex items-center gap-4">
              <select
                name="city"
                id="city"
                className="px-3 py-2 text-white rounded-md bg-tranparent placeholder-white/70 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Filtre a sua cidade</option>
              </select>
               <div className="h-6 w-px bg-white/30" />
              <input
                type="search"
                placeholder="O que deseja hoje?"
                className="flex-1 px-3 py-2 rounded-md text-white placeholder-white/70 text-base focus:outline-none focus:ring-2 focus:ring-orange-400 bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
