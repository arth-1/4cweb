'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { ChevronDown, Menu } from 'lucide-react';
import { NAV_LINKS, EVENTS_DATA } from '@/lib/data';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navItems = NAV_LINKS.map((link) => {
    if (link.label === 'Events') {
      return (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-lg font-headline flex items-center gap-1 hover:bg-white/10"
            >
              {link.label}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background/80 backdrop-blur-md border-white/10">
            <DropdownMenuItem asChild>
              <Link href="/events" className="cursor-pointer">All Events</Link>
            </DropdownMenuItem>
            {EVENTS_DATA.map((event) => (
              <DropdownMenuItem key={event.slug} asChild>
                <Link href={`/events/${event.slug}`} className="cursor-pointer">{event.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <Link
        href={link.href}
        key={link.label}
        className="text-lg font-headline transition-colors hover:text-accent"
        onClick={() => setIsSheetOpen(false)}
      >
        {link.label}
      </Link>
    );
  });
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-16 items-center justify-between glass-card px-6">
          <Link href="/" className="text-2xl font-bold font-headline text-white">
            4C<span className="text-accent">.</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">{navItems}</nav>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/90 backdrop-blur-xl border-l-white/10 w-full">
                <nav className="flex flex-col items-center space-y-8 mt-16">
                  {navItems}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
       </div>
    </header>
  );
}
