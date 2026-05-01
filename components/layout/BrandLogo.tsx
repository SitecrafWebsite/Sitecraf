import Image from 'next/image';

type BrandLogoProps = {
  className?: string;
};

export default function BrandLogo({
  className = '',
}: BrandLogoProps) {
  return (
    <div className={`flex items-center ${className}`.trim()}>
      <Image
        src="/sitecraf_new_logo.webp"
        alt="Sitecraf Logo"
        width={180}
        height={48}
        className="h-10 md:h-12 w-auto object-contain drop-shadow-[var(--glow-sm)] transition-all duration-300"
        priority
      />
    </div>
  );
}
