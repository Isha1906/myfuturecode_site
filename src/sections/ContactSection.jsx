import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import { contact } from '../data/contact';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { AnimatedShape } from '../components/canvas/AnimatedShape';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".contact-container",
      { y: 40, opacity: 0 },
      { scrollTrigger: { trigger: container.current, start: "top 80%" }, y: 0, opacity: 1, duration: 0.8 }
    );
    gsap.fromTo(".contact-inner-card",
      { y: 20, opacity: 0 },
      { scrollTrigger: { trigger: ".contact-container", start: "top 85%" }, y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.2 }
    );
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="py-24 relative z-10 bg-transparent overflow-hidden">

      <div className="container mx-auto px-6 xl:px-0 max-w-[1400px]">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.15}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="32px"
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          perspective={2000}
          scale={1.02}
          transitionSpeed={1000}
          className="contact-container w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="bg-[#080b14] border border-white/10 rounded-[32px] p-6 lg:p-8 shadow-2xl relative overflow-hidden flex flex-col xl:flex-row gap-8 items-center h-full" style={{ transformStyle: 'preserve-3d' }}>

            <div className="absolute top-0 right-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>


            <div className="xl:w-1/4 flex flex-col justify-center px-4 py-4 z-10 w-full text-center xl:text-left" style={{ transform: 'translateZ(30px)' }}>
              <div className="inline-block border border-white/10 rounded-full px-4 py-1 mb-6 text-xs font-bold tracking-widest uppercase text-slate-300 bg-white/5 w-fit mx-auto xl:mx-0">
                Contact Us
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-white leading-tight">
                Let's Build Something <br className="hidden xl:block" />
                <span className="text-purple-500">Amazing Together</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mt-4">
                Have a project in mind or want to partner with us? We'd love to hear from you!
              </p>
            </div>


            <div className="xl:flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full z-10" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>


              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=Business%20Inquiry&body=Hello%20Team,`} target="_blank" rel="noopener noreferrer" className="contact-inner-card cursor-pointer bg-[#0b0f19] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:border-purple-500/30 shadow-lg" style={{ transform: 'translateZ(10px)' }}>
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                  <FiMail size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">Email Us</h3>
                <p className="text-slate-300 text-xs mb-1">{contact.email}</p>
                <p className="text-slate-500 text-[11px]">We reply within 24 hours</p>
              </a>


              <div className="contact-inner-card bg-[#0b0f19] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:border-purple-500/30 shadow-lg" style={{ transform: 'translateZ(15px)' }}>
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                  <FiPhone size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">Call Us</h3>
                <p className="text-slate-300 text-xs mb-1">{contact.phone}</p>
                <p className="text-slate-500 text-[11px]">Mon - Fri, 10:00 AM - 6:00 PM (IST)</p>
              </div>


              <div className="contact-inner-card bg-[#0b0f19] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:border-purple-500/30 shadow-lg" style={{ transform: 'translateZ(20px)' }}>
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                  <FiMapPin size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold mb-1">Visit Us</h3>
                <p className="text-slate-300 text-[11px] mb-1.5">MFC IT Solutions</p>
                <div className="text-slate-500 text-[10px] leading-tight px-1">
                  <p className="mb-0.5"><strong className="text-slate-400">Head Office:</strong> {contact.headOffice}</p>
                  <p><strong className="text-slate-400">Branch Office:</strong> {contact.branchOffice}</p>
                </div>
              </div>


              <div className="contact-inner-card bg-[#0b0f19] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:border-purple-500/30 shadow-lg" style={{ transform: 'translateZ(10px)' }}>
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                  <FiClock size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">Working Hours</h3>
                <p className="text-slate-300 text-xs mb-1">Mon - Fri: 10:00 AM - 6:00 PM</p>
                <p className="text-slate-500 text-[11px]">Saturday & Sunday: Closed</p>
              </div>

            </div>


            <div className="hidden xl:flex xl:w-1/5 justify-center items-center z-10 relative" style={{ transform: 'translateZ(50px)' }}>

              <div className="absolute inset-0 bg-purple-600/20 blur-[60px] rounded-full scale-150"></div>

              <img
                src="/contact-headphones.png"
                alt="3D Headphones Graphic"
                className="w-full max-w-[220px] object-contain animate-float mix-blend-screen relative z-10"
                onError={(e) => {

                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />

              <div className="hidden flex-col items-center justify-center text-center text-purple-500/50 border border-dashed border-purple-500/30 rounded-2xl w-full h-[200px] bg-purple-500/5">
                <span className="text-xs font-bold uppercase mb-2 block">Image Placeholder</span>
                <span className="text-[10px]">Add contact-headphones.png to public/</span>
              </div>
            </div>

          </div>
        </Tilt>
      </div>
    </section>
  );
}
