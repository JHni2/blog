import { AiFillGithub } from 'react-icons/ai';
import { SiNotion } from 'react-icons/si';
import ContactForm from '../componenets/ContactForm';

export default function ContactPage() {
  const LINKS = [
    {
      icon: <AiFillGithub />,
      url: 'https://github.com/JHni2',
    },
    { icon: <SiNotion />, url: 'https://meteor-rainstorm-fce.notion.site/58f26f8d459b4cefbfd5818fd11fba68?pvs=4' },
  ];

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>wlgus0260@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noreferrer" className="text-5xl hover:text-yellow-400">
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
