import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export function Project() {
  const projects = [
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      image: "https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      link: "#",
      colSpan: 'col-span-1'
    },
    {
      title: "Projeto 2",
      description: "Descrição do projeto 2",
      image: "https://images.unsplash.com/photo-1612425626229-632fab8bfc02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      link: "#",
      colSpan: 'col-span-1'
    },
    {
      title: "Projeto 3",
      description: "Descrição do projeto 3",
      image: "https://images.unsplash.com/photo-1594202304180-f25d9c992442?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      link: "#",
      colSpan: 'col-span-1'
    },
    {
      title: "Projeto 4",
      description: "Descrição do projeto 4",
      image: "https://images.unsplash.com/photo-1558174685-430919a96c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      link: "#",
      colSpan: 'col-span-1 md:col-span-2'
    }
  ];
  return (
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="font-headline text-3xl font-semibold mr-2">Projetos &</span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div className={`group relative h-52 cursor-default rounded-lg bg-cover bg-center ${project.colSpan}`} key={`project-${index}`} style={{ backgroundImage: `url(${project.image})`}}>
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-green-600/80 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">{project.title}</h4>
                  <p className="mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
