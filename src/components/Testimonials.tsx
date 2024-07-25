import { FaQuoteLeft } from "react-icons/fa";

export function Testimonials() {
  return (
    <section className="container mx-auto p-4 max-w-4xl py-8">
      <h2 className="text-center mb-2 font-bold">
        <span className="mr-2 font-headline text-3xl">Depoimento de</span>
        <span className="font-handwriting text-4xl">Clientes</span>
      </h2>
      <figure>
        <FaQuoteLeft className="w-8 h-8 text-gray-400" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
          Trabalhar com José Guilherme foi uma experiência excepcional. Eu estava em busca de um profissional de desenvolvimento web e mobile que não apenas compreendesse minhas necessidades, mas que também fosse capaz de entregar soluções inovadoras e eficientes. José Guilherme superou todas as expectativas.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img className="w-8 h-8 rounded-full" src="https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" />
          <div className="flex items-center gap-2 divide-x-2 divide-gray-200">
            <div className="font-bold">Marcos Pereira</div>
            <div className="pl-3 text-sm text-gray-500">Desenvolvedor</div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
