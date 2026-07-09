import React from 'react';
import Navbar from '../components/nav/Navbar';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import HowIUseAI from '../components/ai/HowIUseAI';
import FavoriteBooks from '../components/books/FavoriteBooks';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen transition-colors duration-450">
      <Navbar />
      <Hero />
      <div className="bg-[var(--bg-color)]">
        <Projects />
        <HowIUseAI />
        <FavoriteBooks />
        <Footer />
      </div>
    </main>
  );
}
