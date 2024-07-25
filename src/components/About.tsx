import foto from "../assets/image/foto.jpeg";

export function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p4">
      <div className="relative p-4 text-center">
        <h2 className="z-10 text-green-900 font-bold relative">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Sou um desenvolvedor fullstack com mais de cinco anos de experiência em desenvolvimento e manutenção de sistemas.
        </p>
        <div className="absolute left-1/2 top-3 z-0 size-10 rounded-lg bg-green-200/40"></div>
      </div>

      <div className="realtive mx-auto mt-20 max-w-lg">
        <div className="relative bg-green-200/40 w-full min-h-40 rounded-lg md:min-h-64">
          <div className="relative ml-24 bg-white rounded-md top-4 max-w-72 min-h-32 font-headline text-xs md:ml-52 md:min-h-56">
            <table className="">
              <tbody>
                <tr>
                  <td className="p-2 text-green-600 font-bold">Nome:</td><td className="p-2">José Guilherme Sório</td>
                </tr>
                <tr>
                  <td className="p-2 text-green-600 font-bold">Idade:</td><td className="p-2">33 anos</td>
                </tr>
                <tr>
                  <td className="p-2 text-green-600 font-bold">Celular:</td><td className="p-2">
                    <a href="tel:+5511964652489">+55(11)96465-2489</a>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-green-600 font-bold">Email:</td><td className="p-2">
                    <a href="mailto:joseguilhermesorio@gmail.com">joseguilhermesorio@gmail.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <img
            className="absolute -top-4 w-24 h-auto rounded-lg md:w-48"
            src={foto}
            alt="portfolio image" />
        </div>
      </div>
    </section>
  );
}
