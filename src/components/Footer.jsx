import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiTwitter, FiInstagram, FiLinkedin, FiYoutube, FiChevronDown, FiMail, FiMapPin } from 'react-icons/fi';
import { contact } from '../data/contact';

const FooterAccordion = ({ title, links, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-4 rounded-xl font-bold text-sm transition-all shadow-lg backdrop-blur-md cursor-pointer outline-none"
      >
        <span className="truncate pr-4">{title}</span>
        <FiChevronDown className={`transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-purple-400' : 'text-slate-400'}`} size={18} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-3 px-5 py-3 border-l-2 border-purple-500/30 ml-2">
          {links.map((item, idx) => (
            <ExpandableFooterLink key={idx} item={item} isMobile={true} onNavigate={onNavigate} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExpandableFooterLink = ({ item, isMobile, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (item.subLinks) {
      setIsOpen(!isOpen);
    } else if (onNavigate) {
      onNavigate(e, item);
    }
  };

  return (
    <li className="flex flex-col">
      <a
        href={item.path || '#'}
        onClick={handleClick}
        className={isMobile
          ? "text-slate-300 hover:text-purple-400 text-sm transition-colors flex items-center justify-between group cursor-pointer"
          : "text-slate-400 hover:text-white text-sm transition-colors flex items-center justify-between group w-fit cursor-pointer gap-2"
        }
      >
        <div className="flex items-center gap-2">
          <span className={isMobile
            ? "w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-purple-500 transition-colors"
            : "w-0 h-[1px] bg-purple-500 group-hover:w-3 transition-all duration-300"
          } />
          <span className={!isMobile ? "group-hover:translate-x-1 transition-transform duration-300" : ""}>
            {item.name || item}
          </span>
        </div>
        {item.subLinks && (
          <FiChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-400' : 'text-slate-600'} ${isMobile ? '' : 'ml-4'}`} size={14} />
        )}
      </a>

      {item.subLinks && (
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <ul className={`border-l border-purple-500/30 pl-3 ${isMobile ? 'ml-4 space-y-4 mb-2' : 'ml-4 space-y-4 mt-2'}`}>
            {item.subLinks.map((subItem, sIdx) => (
              <li key={sIdx}>
                <a
                  href={subItem.path || '#'}
                  onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate(e, subItem); }}
                  className={isMobile
                    ? "text-slate-300 hover:text-purple-400 text-sm transition-colors flex items-center gap-2 group cursor-pointer"
                    : "text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2 group w-fit cursor-pointer"
                  }>
                  <span className={isMobile
                    ? "w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-purple-500 transition-colors"
                    : "w-0 h-[1px] bg-purple-500 group-hover:w-3 transition-all duration-300"
                  } />
                  <span className={!isMobile ? "group-hover:translate-x-1 transition-transform duration-300" : ""}>{subItem.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, link) => {
    if (e) e.preventDefault();

    if (link.path && link.path !== location.pathname) {
      navigate(link.path);
      setTimeout(() => {
        if (link.id) {
          const element = document.getElementById(link.id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
      return;
    }

    if (link.id) {
      const element = document.getElementById(link.id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const companyLinks = [
    { name: 'Home', path: '/', id: 'hero' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Our Team',
      path: '/', id: 'team',
      subLinks: [
        { name: 'Leadership', path: '/', id: 'leadership' },
        { name: 'Management', path: '/', id: 'managers' },
        { name: 'General Team', path: '/', id: 'team' }
      ]
    },
    { name: 'Contact', path: '/contact' },
    { name: 'Products', path: '/', id: 'what-we-build' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' }
  ];

  return (
    <footer className="bg-[#020306] border-t border-white/5 pt-24 pb-12 relative z-10 overflow-hidden">
      {/* Dynamic Lighting Effects & Watermark */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/3" />
      <img src="/new-logo.png" alt="" className="absolute -right-20 -bottom-20 w-[600px] md:w-[800px] opacity-[0.02] pointer-events-none grayscale blur-[2px] rotate-12 select-none" />

      {/* Glossy Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-12 gap-12 xl:gap-8 mb-20">

          {/* Column 1: Brand & Social */}
          <div className="md:col-span-1 xl:col-span-4 flex flex-col items-start">
            <a href="#hero" className="mb-8 block w-fit">
              <img src="/new-logo.png" alt="MFC Logo" className="w-[180px] md:w-[220px] h-auto object-contain drop-shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-transform duration-300 hover:scale-105 origin-left" />
            </a>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-sm">
              We design and engineer cutting-edge mobile games, scalable web platforms, and native applications that millions of users rely on daily.
            </p>
            <div className="flex gap-4">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#0A66C2]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-[#0A66C2]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <FiLinkedin size={18} className="text-slate-400 group-hover:text-[#0A66C2] relative z-10 transition-colors" />
              </a>
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#E1306C]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F56040] to-[#E1306C] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <FiInstagram size={18} className="text-slate-400 group-hover:text-pink-500 relative z-10 transition-colors" />
              </a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=Business%20Inquiry&body=Hello%20Team,`} target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <FiMail size={18} className="text-slate-400 group-hover:text-purple-400 relative z-10 transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden">
            <FooterAccordion title="Quick Links" links={[...companyLinks, ...legalLinks]} onNavigate={handleLinkClick} />
          </div>

          {/* Column 2: Link Columns (Centered) */}
          <div className="hidden md:flex md:col-span-1 xl:col-span-4 justify-center gap-12 xl:gap-24">
            <div>
              <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Company</h4>
              <ul className="space-y-4">
                {companyLinks.map((item, idx) => (
                  <ExpandableFooterLink key={idx} item={item} isMobile={false} onNavigate={handleLinkClick} />
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Legal</h4>
              <ul className="space-y-4">
                {legalLinks.map((item, idx) => (
                  <ExpandableFooterLink key={idx} item={item} isMobile={false} onNavigate={handleLinkClick} />
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="block md:col-span-1 xl:col-span-4 xl:pl-16">
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-colors mt-1">
                  <FiMapPin className="text-slate-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <div className="text-slate-400 text-sm leading-relaxed group-hover:text-white transition-colors max-w-[200px]">
                  <p className="text-purple-400 font-semibold text-[10px] uppercase tracking-wider mb-0.5">Head Office</p>
                  <p className="mb-3">{contact.headOffice}</p>
                  <p className="text-purple-400 font-semibold text-[10px] uppercase tracking-wider mb-0.5">Branch Office</p>
                  <p>{contact.branchOffice}</p>
                </div>
              </div>

              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=Business%20Inquiry&body=Hello%20Team,`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                  <FiMail className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">
                  {contact.email}
                </p>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex justify-center items-center relative z-10">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} My Future Code. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
