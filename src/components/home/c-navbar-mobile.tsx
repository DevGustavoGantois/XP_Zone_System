import Image from "next/image";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export function NavbarMobile() {
    return (
        <nav className="flex items-center justify-between">
            <figure>
                <Image src="/Logo.svg" width={110} height={110} alt="" />
            </figure>
            <div className="absolute top-16 right-4">
                <Sheet >
                    <SheetTrigger>
                        <Menu size={32} className="text-white cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent side="top" className="bg-[#12042B] border-1 border-white/30">
                        <SheetHeader>
                            <SheetTitle className="text-3xl mt-10 text-center text-transparent bg-clip-text bg-gradient-to-r font-bold from-[#FF9A51] to-[#E44963]">XP Zone</SheetTitle>
                            <SheetDescription className="text-center text-sm font-light text-white/70">
                                Clique nos botões abaixo para entrar na plataforma
                            </SheetDescription>
                            <div className="flex flex-col justify-center items-center gap-[16px] mt-4">
                                <Button variant="outline" className="w-full">
                                    Entrar
                                </Button>
                                <Button variant="default" className="w-full">
                                    Anunciar grátis
                                </Button>   
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}