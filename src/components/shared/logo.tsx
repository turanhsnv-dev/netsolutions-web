import Image from 'next/image';
import Link from 'next/link';

const LOGO_WIDTH = 728;
const LOGO_HEIGHT = 667;

type LogoProps = {
  variant?: 'mark' | 'full';
  height?: number;
  className?: string;
  priority?: boolean;
};

const logoImageClass =
  'dark:brightness-0 dark:invert transition-[filter] duration-300';

export const Logo = ({ variant = 'full', height = 48, className = '', priority = false }: LogoProps) => {
  if (variant === 'mark') {
    const markHeight = height;
    const markWidth = Math.round(markHeight * 1.15);

    return (
      <Link
        href="/"
        className={`inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0275d8] rounded-md shrink-0 ${className}`}
      >
        <div
          className="relative shrink-0 overflow-hidden"
          style={{ width: markWidth, height: markHeight }}
        >
          <Image
            src="/logo/demo-ns.png"
            alt="NetSolutions"
            fill
            sizes={`${markWidth}px`}
            className={`object-cover object-top ${logoImageClass}`}
            priority={priority}
          />
        </div>
      </Link>
    );
  }

  const width = Math.round((LOGO_WIDTH / LOGO_HEIGHT) * height);

  return (
    <Link
      href="/"
      className={`inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0275d8] rounded-md ${className}`}
    >
      <Image
        src="/logo/demo-ns.png"
        alt="NetSolutions"
        width={width}
        height={height}
        className={logoImageClass}
        style={{ height, width }}
        priority={priority}
      />
    </Link>
  );
};
