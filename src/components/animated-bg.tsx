'use client';

export function AnimatedBg() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-background">
      <div
        className="animated-light"
        style={{
          top: '10vh',
          left: '10vw',
          backgroundColor: 'hsl(var(--primary) / 0.1)',
          animationDelay: '0s',
        }}
      />
      <div
        className="animated-light"
        style={{
          bottom: '10vh',
          right: '10vw',
          backgroundColor: 'hsl(var(--accent) / 0.1)',
          animationDelay: '-5s',
          width: '400px',
          height: '400px'
        }}
      />
    </div>
  );
}
