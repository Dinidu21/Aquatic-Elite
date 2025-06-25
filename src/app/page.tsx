// app/page.tsx
import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import TestimonialsSpotlight from '../../components/sections/TestimonialsSpotlight';
import AchievementsCarousel from '../../components/sections/AchievementsCarousel';
import AboutCoachPreview from '../../components/sections/AboutCoachPreview';


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutCoachPreview />
      <AchievementsCarousel />
      <TestimonialsSpotlight />
    </main>
  );
}