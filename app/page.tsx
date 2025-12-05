import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-8">
          <Image src="/logo-gpp.png" alt="logo" width={140} height={140} className="object-contain mx-auto" />
        </div>
      </nav>
      <section className="h-[100dvh] w-full">
        <Image src="/hero-bg.jpg" alt="background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/75">
          <div className="container mx-auto h-full flex items-center justify-center">
            <div className="flex flex-col text-center text-white lg:text-6xl text-5xl font-medium tracking-tight">
              <span>Sua marca,</span>
              <span>nossa impressão.</span>
              <Link href="https://www.geradoor.com/2fc6c6" target="_blank">
                <Button variant="link" className="mt-8 text-lg cursor-pointer">
                  Fale conosco
                  <ArrowRightIcon className="size-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
