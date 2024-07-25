import { HiAdjustments } from "react-icons/hi";
import { HiComputerDesktop, HiDevicePhoneMobile } from "react-icons/hi2";

export function Services() {
  const services = [
    {
      title: "Desenvolvimento Frontend",
      description: "Desenvolvimento de websites, landing pages, e-commerce, etc.",
      icon: <HiComputerDesktop className="w-12 h-12" />
    },
    {
      title: "Desenvolvimento Backend",
      description: "Desenvolvimento de APIs e microserviços.",
      icon: <HiAdjustments className="w-12 h-12" />
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Desenvolvimento de aplicativos para Android e iOS.",
      icon: <HiDevicePhoneMobile className="w-12 h-12" />
    }
  ];
  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-green-600">O que faço de melhor</p>
        <h2 className="mb-2 font-bold text-green-900">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>
        <p className="text-sm text-gray-600">
          Posso atender a qualquer necessidade de sua empresa.
        </p>
      </div>
      <div className="flex gap-2 flex-col md:flex-row">
        {
          services.map((service, index) => (
            <div className="basis-1/3 rounded-lg bg-green-700 p-4 text-white" key={index}>
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}
