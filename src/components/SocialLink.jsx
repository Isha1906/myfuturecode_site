import React from 'react';

export function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors duration-300"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
