'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const nodes = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(238,75,118,${(1 - dist / 140) * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        n.pulse += 0.03;
        const glow = (Math.sin(n.pulse) + 1) / 2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + glow, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.4 + glow * 0.4})`;
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0A146E]">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Radial glow behind 404 */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(238,75,118,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Badge */}
        <div className="mb-8 rounded-full border border-white/20 bg-white/10 px-5 py-1.5 backdrop-blur-sm">
          <span className="text-xs font-bold tracking-[3px] text-white/80">S&amp;T CLUB &bull; SKIT JAIPUR</span>
        </div>

        {/* 404 with glitch */}
        <div className="relative select-none leading-none">
          {/* shadow layer */}
          <span
            className="absolute inset-0 text-[110px] font-black text-[#EE4B76] md:text-[180px]"
            style={{ animation: 'glitch-r 4s infinite', opacity: 0 }}
            aria-hidden
          >
            404
          </span>
          <span
            className="absolute inset-0 text-[110px] font-black text-cyan-400 md:text-[180px]"
            style={{ animation: 'glitch-l 4s infinite', opacity: 0 }}
            aria-hidden
          >
            404
          </span>
          {/* main */}
          <h1
            className="text-[110px] font-black text-white md:text-[180px]"
            style={{ textShadow: '0 0 60px rgba(238,75,118,0.6), 0 0 120px rgba(238,75,118,0.2)' }}
          >
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="mt-1 text-2xl font-bold text-white md:text-3xl">
          Lost in the network?
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50 md:text-base">
          This page doesn&apos;t exist in our system. The URL might be wrong or the page may have moved.
        </p>

        {/* Divider dots */}
        <div className="mt-6 flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[#EE4B76]"
              style={{ animation: `blink 1.4s ${i * 0.2}s infinite` }}
            />
          ))}
        </div>

        {/* CTA */}
        <Link href="/">
          <button className="mt-6 rounded-full border border-[#EE4B76] bg-[#EE4B76] px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-[#EE4B76] hover:shadow-[0_0_24px_rgba(238,75,118,0.5)] md:text-base">
            Back to Home &rarr;
          </button>
        </Link>

        {/* Footer hint */}
        <p className="mt-10 text-xs text-white/25">
          Science &amp; Technology Club &bull; SKIT Jaipur
        </p>
      </div>

      <style>{`
        @keyframes glitch-r {
          0%,88%,100% { opacity:0; transform:translate(0,0); }
          89% { opacity:0.5; transform:translate(5px,2px) skewX(2deg); }
          90% { opacity:0.3; transform:translate(-3px,-1px); }
          91% { opacity:0; }
        }
        @keyframes glitch-l {
          0%,91%,100% { opacity:0; transform:translate(0,0); }
          92% { opacity:0.4; transform:translate(-5px,1px) skewX(-2deg); }
          93% { opacity:0.2; transform:translate(3px,-2px); }
          94% { opacity:0; }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50% { opacity:0.2; }
        }
      `}</style>
    </div>
  );
}
