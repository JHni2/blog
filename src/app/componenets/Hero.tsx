import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../../public/images/profile.png';

export default function Hero() {
  return (
    <section className="flex flex-col gap-2 text-center">
      <Image priority className="mx-auto rounded-full" src={profileImage} alt="프로필 이미지" width={250} height={250} />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm JH"}</h2>
      <p className="text-lg font-semibold">프론트엔드 개발자 준비생</p>
      <Link href="/contact">
        <span className="bg-yellow-500 font-bold rounded-xl py-1 px-4">Contact Me</span>
      </Link>
    </section>
  );
}
