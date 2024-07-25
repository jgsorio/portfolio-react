import { FormEvent, useRef, useState } from "react";
import { FaCheckCircle, FaSpinner, FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import emailjs from "@emailjs/browser"

export function Contact() {
  const contacts = [
    {
      name: "WhatsApp",
      description: "+55 (11) 96465-2489",
      url: "https://wa.me/5547991919888?text=Olá, gostaria de falar sobre um projeto",
      icon: <FaWhatsapp className="size-10"/>,
    },
    {
      name: "E-mail",
      description: "joseguilhermesorio@gmail.com",
      url: "mailto:joseguilhermesorio@gmail",
      icon: <HiOutlineEnvelope className="size-10"/>
    }
  ];

  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    console.log(form.current);
    event.preventDefault();

    if (!form.current) return;
    setLoading(true);

    emailjs.sendForm('service_sucq91x', 'template_oznfivx', form.current, 'XgLMO3GCOw46vn0jS')
    .then(() => {
      setSuccess(true);
      setLoading(false);
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    });
  }

  return (
    <section id="contact" className="bg-green-700 text-white">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="mb-2 text-center">
            <span className="font-headline text-3xl mr-2">Fale</span>
            <span className="font-handwriting text-4xl">Comigo</span>
          </h2>
          <p className="text-center">Entre em contato comigo pelo formulário abaixo.</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex gap-4 flex-col md:flex-row">
                <div className="mb-4 basis-1/2">
                  <label htmlFor="name" className="mb-2 block font-headline font-semibold">Nome:</label>
                  <input type="text" name="name" id="name" className="w-full rounded-lg border border-white bg-transparent p-2 outline-none" required />
                </div>
                <div className="mb-4 basis-1/2">
                  <label htmlFor="email" className="mb-2 block font-headline font-semibold">E-mail:</label>
                  <input type="email" name="email" id="email" className="w-full rounded-lg border border-white bg-transparent p-2 outline-none" required />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="mb-2 block font-headline font-semibold">Mensagem:</label>
                <textarea name="message" id="message" className="h-44 w-full rounded-lg border border-white bg-transparent p-2 outline-none" required></textarea>
              </div>
              <button type="submit" className="button text-gray-500 hover:text-gray-900 flex gap-2 items-center">
                { loading && <FaSpinner className="animate-spin" /> }
                { success &&  <FaCheckCircle /> }
                Enviar Mensagem
              </button>
              { error && <p className="text-red-500">Erro ao enviar mensagem, tente novamente mais tarde</p> }
            </form>
          </div>
          <div className="basis-1/3 mt-0 md:mt-8 md:ml-3">
            {
              contacts.map((contact, index) => (
                <div className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4" key={`contact-${index}`}>
                  {contact.icon}
                  <div className="font-headline font-semibold">
                    <a href={contact.url} target="_blank" className="text-gray-300 underline">{contact.description}</a>
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
