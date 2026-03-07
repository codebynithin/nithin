import React, { useEffect, useRef, useState } from 'react';
import './SkillBubbles.scss';

interface TechLogo {
  name: string;
  src: string;
  size: number;
}

const TECHS: TechLogo[] = [
  {
    name: 'HTML5',
    src: '/images/skills/html5-original.svg',
    size: 52,
  },
  {
    name: 'CSS3',
    src: '/images/skills/css3-original.svg',
    size: 48,
  },
  {
    name: 'JavaScript',
    src: '/images/skills/javascript-original.svg',
    size: 44,
  },
  {
    name: 'TypeScript',
    src: '/images/skills/typescript-original.svg',
    size: 44,
  },
  {
    name: 'React',
    src: '/images/skills/react-original.svg',
    size: 50,
  },
  {
    name: 'Angular',
    src: '/images/skills/angularjs-original.svg',
    size: 50,
  },
  {
    name: 'Vue',
    src: '/images/skills/vuejs-original.svg',
    size: 46,
  },
  {
    name: 'SASS',
    src: '/images/skills/sass-original.svg',
    size: 46,
  },
  {
    name: 'Tailwind',
    src: '/images/skills/tailwindcss-original.svg',
    size: 46,
  },
  {
    name: 'NodeJS',
    src: '/images/skills/nodejs-original.svg',
    size: 50,
  },
  {
    name: 'NestJS',
    src: '/images/skills/nestjs-original.svg',
    size: 44,
  },
  {
    name: 'Ionic',
    src: '/images/skills/ionic-original.svg',
    size: 44,
  },
  {
    name: 'Figma',
    src: '/images/skills/figma-original.svg',
    size: 40,
  },
  {
    name: 'Git',
    src: '/images/skills/git-original.svg',
    size: 46,
  },
  {
    name: 'Bootstrap',
    src: '/images/skills/bootstrap-original.svg',
    size: 44,
  },
  {
    name: 'ExpressJS',
    src: '/images/skills/express-original.svg',
    size: 44,
  },
];

interface BubbleState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

const SkillBubbles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<BubbleState[]>([]);
  const animFrameRef = useRef<number>(0);
  const [, setTick] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const placed: BubbleState[] = TECHS.map((tech) => {
      const s = tech.size + 24;
      const x = Math.random() * (cw - s);
      const y = Math.random() * (ch - s);
      const speed = 0.25 + Math.random() * 0.4;
      const angle = Math.random() * 2 * Math.PI;

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: s,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
      };
    });

    bubblesRef.current = placed;

    const animate = () => {
      const cw2 = window.innerWidth;
      const ch2 = window.innerHeight;

      bubblesRef.current = bubblesRef.current.map((b) => {
        let { x, y, vx, vy } = b;
        const { size, rotationSpeed } = b;
        const rotation = b.rotation + rotationSpeed;

        x += vx;
        y += vy;

        if (x <= 0) {
          x = 0;
          vx = Math.abs(vx);
        } else if (x + size >= cw2) {
          x = cw2 - size;
          vx = -Math.abs(vx);
        }

        if (y <= 0) {
          y = 0;
          vy = Math.abs(vy);
        } else if (y + size >= ch2) {
          y = ch2 - size;
          vy = -Math.abs(vy);
        }

        return { ...b, x, y, vx, vy, rotation };
      });

      setTick((t) => t + 1);

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="skill-bg-canvas" aria-hidden="true">
      {bubblesRef.current.map((bubble, i) => (
        <div
          key={i}
          className="skill-bg-bubble"
          title={TECHS[i].name}
          style={{
            transform: `translate(${bubble.x}px, ${bubble.y}px) rotate(${bubble.rotation}deg)`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
          }}
        >
          <img
            src={TECHS[i].src}
            alt={TECHS[i].name}
            width={TECHS[i].size}
            height={TECHS[i].size}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillBubbles;
