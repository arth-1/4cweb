'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button as MovingBorderButton } from '../ui/moving-border';
import { MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const words = ['Connect', 'Collect', 'Contest', 'Commence'];

export function HeroSectionAnimated() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 150);
      } else {
        // Wait before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Deleting animation
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        // Move to next word
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentWordIndex]);

  return (
    <motion.section 
      ref={heroRef}
      style={{ scale, y, opacity }}
      className="relative min-h-screen flex items-center justify-center bg-background text-white overflow-hidden"
    >
      {/* Enhanced Aurora Background for Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(68,154,249,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(98,91,253,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,145,254,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[80vh] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-card w-full max-w-4xl p-8 md:p-16 shadow-2xl rounded-3xl border border-white/20 backdrop-blur-xl"
        >
          <div className="text-center space-y-8">
            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tighter"
            >
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                4C
              </span>
            </motion.h1>

            {/* Animated Typing Text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-16 flex items-center justify-center"
            >
              <span className="text-2xl md:text-3xl font-medium text-foreground/90">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-accent"
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
            >
              Where creativity meets technology to redefine marketing for the digital age.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="pt-4"
            >
              <MovingBorderButton
                as={Link}
                href="/#contact-us"
                className="bg-slate-900/90 hover:bg-slate-800/90 text-white font-bold text-lg px-8 py-4"
                containerClassName=""
                borderClassName="bg-[radial-gradient(var(--aurora-blue)_40%,transparent_60%)]"
              >
                Contact Us <MoveRight className="ml-2 w-5 h-5" />
              </MovingBorderButton>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-32 right-16 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000" />
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse delay-2000" />
            <div className="absolute bottom-32 right-10 w-12 h-12 bg-accent/10 rounded-full blur-xl animate-pulse delay-500" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
