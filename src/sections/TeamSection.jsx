import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { EmployeeCard } from '../components/EmployeeCard';
import { EmployeePortfolio } from '../components/EmployeePortfolio';
import { employees } from '../data/employees';

gsap.registerPlugin(ScrollTrigger);

export function TeamSection() {
  const container = useRef(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    gsap.fromTo(
      '.team-heading',
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
            '.team-card',
            { y: 30, opacity: 0 },
            {
              scrollTrigger: {
                trigger: '.team-grid',
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
      id="team"
      ref={container}
      className="py-24 relative z-10 bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="team-heading text-center mb-12 md:mb-16">
          <p className="text-purple-500 font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-2">
            The Core Team
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
            The Minds Behind The Magic
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
                team-grid
                list-none p-0 m-0
                flex flex-wrap justify-center
                -mx-2 sm:-mx-2.5 md:-mx-3 lg:-mx-3.5
              "
            >
              {employees.map((member) => (
                <li
                  key={member.id}
                  className="team-card w-1/2 md:w-1/3 lg:w-1/4 min-w-0 px-2 sm:px-2.5 md:px-3 lg:px-3.5 mb-4 sm:mb-5 md:mb-6 lg:mb-7"
                >
                  <EmployeeCard employee={member} onClick={setSelectedEmployee} />
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </section>
  );
}