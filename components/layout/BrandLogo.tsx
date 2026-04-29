import Image from 'next/image';

type BrandLogoProps = {
  iconClassName?: string;
  textClassName?: string;
  className?: string;
  animated?: boolean;
};

export default function BrandLogo({
  iconClassName = 'w-9 h-9',
  textClassName = 'text-xl',
  className = '',
  animated = true,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`.trim()}>
      <Image
        src="/sitecraf_logo.webp"
        alt="Sitecraf logo"
        width={40}
        height={40}
        className={`${iconClassName} flex-shrink-0 object-contain`.trim()}
      />
      <span
        className={`brand-wordmark ${animated ? 'brand-wordmark--animated' : ''} ${textClassName}`.trim()}
        aria-label="Sitecraf"
      >
        <span className="brand-wordmark__text">
          <span className="brand-wordmark__site">Site</span>
          <span className="brand-wordmark__craf">craf</span>
        </span>
      </span>
    </span>
  );
}
