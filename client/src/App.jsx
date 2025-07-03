import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload';
import Footer from './components/Footer';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10 space-y-24 pt-24">
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <section id="resume"><ResumeDownload /></section>
      </main>
      <Footer />
    </div>
  );
}
