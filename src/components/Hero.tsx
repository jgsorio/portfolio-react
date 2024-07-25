import { HiDownload } from "react-icons/hi";

export function Hero() {
  return (
    <section className="bg-gradient-to-tr from-black to-gray-900 text-white rounded-br-3xl md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h1 className="mb-6">
            <span className="font-handwriting block text-3xl">Olá, me chamo</span>
            <span className="font-headline text-5xl font-semibold mr-2 text-center md:text-left">José</span> 
            <span className="font-headline text-5xl font-light text-green-400 text-center md:text-left">Guilherme</span>
          </h1>
          <h2 className="font-semibold flex items-center gap-2 ">
            <div className="h-1 w-12 rounded-full bg-green-400"></div>
            Desenvolvedor FullStack
          </h2>
          <p className="text-gray-600 my-6 text-center md:text-left">
            Sou um desenvolvedor fullstack apaixonado por criar soluções digitais completas que combinam uma arquitetura robusta no back-end com interfaces intuitivas no front-end.
          </p>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <a href="#" className="underline text-bold">Fale Comigo</a>
            <span className="italic text-gray-500">ou</span>
            <a href="#" className="button text-gray-500 hover:text-gray-900 flex gap-2 items-center"><HiDownload /> Baixe meu CV</a>
          </div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </section>
  );
}
