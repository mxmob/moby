"use client";

import Link from "next/link";
import { ReactNode } from "react";

// Page Hero para páginas internas
interface PageHeroProps {
  h1: string;
  subtitle: string;
  badge?: string;
}

export function PageHero({ h1, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(6, 182, 212, 0.08) 0%, transparent 50%)",
        }}
      />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {h1}
        </h1>
        <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

// Section wrapper
interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

// Section header
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-white/60 text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

// Service card
interface ServiceCardProps {
  name: string;
  desc: string;
  icon?: ReactNode;
}

export function ServiceCard({ name, desc, icon }: ServiceCardProps) {
  return (
    <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-white font-semibold text-lg mb-2">{name}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

// Problem/Solution block
interface ProblemSolutionProps {
  problemTitle: string;
  problemText: string;
  solutionTitle: string;
  solutionText: string;
}

export function ProblemSolution({ problemTitle, problemText, solutionTitle, solutionText }: ProblemSolutionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Problem */}
      <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-white font-semibold text-lg">{problemTitle}</h3>
        </div>
        <p className="text-white/60 leading-relaxed">{problemText}</p>
      </div>

      {/* Solution */}
      <div className="p-8 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-white font-semibold text-lg">{solutionTitle}</h3>
        </div>
        <p className="text-white/60 leading-relaxed">{solutionText}</p>
      </div>
    </div>
  );
}

// CTA Section
interface CTASectionProps {
  title: string;
  buttonText: string;
  buttonHref?: string;
  subtitle?: string;
}

export function CTASection({ title, buttonText, buttonHref = "/contacto", subtitle }: CTASectionProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
              bg-gradient-to-r from-cyan-500 to-violet-600
              text-white font-semibold text-base
              transition-all duration-300
              hover:shadow-xl hover:shadow-cyan-500/30
              hover:scale-105 active:scale-100"
          >
            {buttonText}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Step card for process
interface StepCardProps {
  number: string;
  title: string;
  desc: string;
  details?: string[];
}

export function StepCard({ number, title, desc, details }: StepCardProps) {
  return (
    <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5">
      <span className="absolute -top-4 left-8 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-bold">
        {number}
      </span>
      <h3 className="text-white font-semibold text-xl mb-3 mt-2">{title}</h3>
      <p className="text-white/60 leading-relaxed mb-4">{desc}</p>
      {details && details.length > 0 && (
        <ul className="space-y-2">
          {details.map((detail, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/50">
              <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {detail}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Sector/Industry card
interface SectorCardProps {
  name: string;
  desc: string;
  href: string;
}

export function SectorCard({ name, desc, href }: SectorCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
            {name}
          </h3>
          <p className="text-white/50 text-sm">{desc}</p>
        </div>
        <svg 
          className="w-5 h-5 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
