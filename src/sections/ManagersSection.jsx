import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EmployeeCard } from '../components/EmployeeCard';
import { EmployeePortfolio } from '../components/EmployeePortfolio';
import { managers } from '../data/managers';

gsap.registerPlugin(ScrollTrigger);

export function ManagersSection() {
  const container = useRef(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    gsap.fromTo(
      '.manager-heading',
      { y: 20, opacity: 0 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
          once: true,
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      }
    );

    mm.add(
      {
        isMobile: '(max-width: 767px)',
        isDesktop: '(min-width: 768px)',
      },
      (context) => {
        const { isMobile } = context.conditions;
        if (!selectedEmployee) {
          gsap.fromTo(
            '.manager-card',
            { y: 30, opacity: 0 },
            {
              scrollTrigger: {
                trigger: '.manager-grid',
                start: 'top 90%',
                once: true,
              },
              y: 0,
              opacity: 1,
              duration: isMobile ? 0.4 : 0.5,
              stagger: isMobile ? 0.06 : 0.1,
              ease: 'power2.out',
            }
          );
        }
      }
    );

    return () => mm.revert();
  }, { scope: container, dependencies: [selectedEmployee] });

  return (
    <section
      id="managers"
      ref={container}
      className="py-24 relative z-10 bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="manager-heading text-center mb-12 md:mb-16">
          <p className="text-purple-500 font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-2">
            Management Team
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
            Managers & Operational Team
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          {selectedEmployee ? (
            <EmployeePortfolio 
              employee={selectedEmployee} 
              onBack={() => setSelectedEmployee(null)} 
            />
          ) : (
            <ul
              className="
                manager-grid
                list-none p-0 m-0
                mx-auto
                grid
                grid-cols-2
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                gap-4
                sm:gap-5
                md:gap-6
                lg:gap-7
              "
            >
              {managers.map((member) => (
                <li key={member.id} className="manager-card w-full min-w-0">
                  <EmployeeCard employee={{ ...member, isManager: true }} onClick={setSelectedEmployee} />
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </section>
  );
}