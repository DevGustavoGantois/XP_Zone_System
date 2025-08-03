import { NavbarMobile } from "@/components/home/c-navbar-mobile";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
    return (
    <header className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-[20px]">
      <nav className="hidden lg:flex items-center justify-between">
        <figure>
          <Image src="/Logo.svg" width={110} height={110} alt="" />
        </figure>
        <div className="flex items-center gap-[16px]">
          <Button variant="outline">
            Entrar
          </Button>
          <Button variant="default">
            Anunciar grátis
          </Button>
        </div>
      </nav>
        <div className="w-full border-1 border-white/10 mt-4 hidden lg:flex" />
        <div className="flex lg:hidden">
          <NavbarMobile />
        </div>
    </header>
    )
}