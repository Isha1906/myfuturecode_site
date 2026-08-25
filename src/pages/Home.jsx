import React from 'react';
import { 
  HeroSection, 
  WhatWeBuildSection, 
  ProcessSection, 
  TechStackSection, 
  AppsSection, 
  OperationsSection, 
  LeadershipSection, 
  ManagersSection,
  TeamSection, 
  TrustedBySection, 
  BottomCTASection,
  ContactSection
} from '../sections';

export function Home() {
  return (
    <main>
      <HeroSection />
      <WhatWeBuildSection />
      <ProcessSection />
      <TechStackSection />
      <AppsSection />
      <OperationsSection />
      <LeadershipSection />
      <ManagersSection />
      <TeamSection />
      <TrustedBySection />
      <BottomCTASection />
    </main>
  );
}
