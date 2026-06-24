import React from 'react';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import HowIUseAI from '../components/ai/HowIUseAI';
import FavoriteBooks from '../components/books/FavoriteBooks';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[var(--bg-color)] transition-colors duration-450">
      <Hero />
      <Projects />
      <HowIUseAI />
      <FavoriteBooks />
      <Footer />
    </main>
  );
}
