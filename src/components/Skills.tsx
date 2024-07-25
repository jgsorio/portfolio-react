import { HiAcademicCap } from "react-icons/hi";
import { HiCodeBracketSquare } from "react-icons/hi2";

export function Skills() {
  const educations = [
    {
      name: "Formado em Analise e Desenvolvimento de Sistemas - Uninove",
    },
    {
      name: "Pós-Graduando em Desenvolvimento FullStack - FIAP",
    }
  ];

  const skills = [
    {
      name: "HTML5/CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 90
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 85
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 70
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      level: 60
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      level: 40
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      level: 80
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      level: 90
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
      level: 60
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      level: 80
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
      level: 80
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
      level: 90
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      level: 60
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      level: 80
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      level: 70
    }
  ];
  return (
    <section className="rounded-br-[80px] bg-green-300 md:rounded-br-[180px] py-">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <h2 className="mb-2 font-bold text-center">
          <span className="font-headline text-3xl mr-2">Educação &</span>
          <span className="font-handwriting text-3xl">Skills</span>
        </h2>
        <p className="text-sm text-gray-700 text-center">
          Fullstack Developer | PHP | Laravel | NodeJS | TypeScript | Docker | AWS | React | VueJS
        </p>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="basis-1/2 p-4">
          <h3 className="mb-4 text-lg font-extrabold">
            <HiAcademicCap className="size-8 text-green-800" />
            Educação
          </h3>
          {
            educations.map((education, index) => (
              <div key={index} className="rounded-lg bg-white p-4 text-sm mb-2 text-gray-800">{education.name}</div>
            ))
          }
        </div>
        <div className="basis-1/2 p-4">
          <h3 className="mb-4 text-lg font-extrabold">
            <HiCodeBracketSquare className="size-8 text-green-800" />
            Skills
          </h3>
          <div className="flex flex-wrap">
            {
              skills.map((skill, index) => (
                <div className="flex flex-col gap-2 w-36 mx-auto mb-3" key={index}>
                  <img src={skill.icon} alt={skill.name} className="size-16 rounded-lg bg-white py-2" />
                  <p className="text-sm text-gray-500">{skill.name}</p>
                  <div className="w-full bg-white h-2 inline-block rounded-full">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
