import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Bem-vindo à Nossa Plataforma
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
          Oferecemos soluções inovadoras para transformar suas ideias em
          realidade. Descubra como podemos ajudar no crescimento do seu negócio.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg">Comece Agora</Button>
          <Button variant="outline" size="lg">
            Saiba Mais
          </Button>
        </div>
      </div>
    </div>
  );
}
