import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { AppCard } from '../components/AppCard';
import { GameCard } from '../components/GameCard';
import { apps } from '../data/apps';
import { games } from '../data/games';

gsap.registerPlugin(ScrollTrigger);

export function AppsSection() {
  const container = useRef(null);
  const [showAllGames, setShowAllGames] = useState(false);
  const [showAllApps, setShowAllApps] = useState(false);

  useGSAP(() => {
    gsap.fromTo(".apps-heading",
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: container.current, start: "top 80%" }, y: 0, opacity: 1, duration: 0.8 }
    );
    gsap.fromTo(".app-card",
      { y: 50, opacity: 0, scale: 0.9 },
      { scrollTrigger: { trigger: ".apps-grid", start: "top 85%" }, y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" }
    );
  }, { scope: container });

  const displayedGames = showAllGames ? games : games.slice(0, 3);
  const displayedApps = showAllApps ? apps : apps.slice(0, 4);

  return (
    <section id="apps" ref={container} className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-6">


        <div id="games" className="mb-16">
          <div className="apps-heading text-center mb-10">
            <p className="text-purple-500 font-bold tracking-widest text-xs uppercase mb-2">Featured Games</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Popular Games</h2>
          </div>

          <div className="apps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 max-w-3xl mx-auto">
            {displayedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {games.length > 3 && (
            <div className="text-center">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="9999px"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={400}
                className="inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <button
                  onClick={() => setShowAllGames(!showAllGames)}
                  className="inline-flex items-center justify-center border border-purple-500/30 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full px-6 py-2 text-sm font-bold transition-colors cursor-pointer outline-none"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {showAllGames ? "Show Less" : "View All Games \u2192"}
                </button>
              </Tilt>
            </div>
          )}
        </div>


        <div id="useful-apps">
          <div className="apps-heading text-center mb-10">
            <p className="text-purple-500 font-bold tracking-widest text-xs uppercase mb-2">Featured Apps</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Useful Apps</h2>
          </div>

          <div className="apps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
            {displayedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          {apps.length > 4 && (
            <div className="text-center">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="9999px"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={400}
                className="inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <button
                  onClick={() => setShowAllApps(!showAllApps)}
                  className="inline-flex items-center justify-center border border-purple-500/30 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full px-6 py-2 text-sm font-bold transition-colors cursor-pointer outline-none"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {showAllApps ? "Show Less" : "View All Apps \u2192"}
                </button>
              </Tilt>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
