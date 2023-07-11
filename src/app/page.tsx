import FeaturedPosts from './componenets/FeaturedPosts';
import Hero from './componenets/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </>
  );
}
