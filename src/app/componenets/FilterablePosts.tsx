'use client';
import { useState } from 'react';
import { Post } from '../service/posts';
import Categories from './Categories';
import PostGrid from './PostGrid';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered = selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);
  return (
    <section>
      <PostGrid posts={filtered} />
      <Categories categories={[ALL_POSTS, ...categories]} selected={selected} onClick={setSelected} />
    </section>
  );
}
