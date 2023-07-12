import { Metadata } from 'next';
import Hero from '../componenets/Hero';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'JH 소개',
};

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          공부하는 개발자 <br />
          현재 NextJS 공부중!
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React <br />
          Git <br />
          VS Code
        </p>
      </section>
    </>
  );
}
