import { Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} 4C. All rights reserved. Developed By
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Twitter />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
