import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-[100]">
      <div className="flex flex-col items-center gap-4">
        <LoaderCircle className="w-12 h-12 animate-spin text-accent" />
        <p className="text-lg font-headline text-white">Loading...</p>
      </div>
    </div>
  );
}
