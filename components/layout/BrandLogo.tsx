'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

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
  const fullText = 'Sitecraf';
  const typingSpeedMs = 52;
  const typingRestartDelayMs = 60000;
  const [displayedText, setDisplayedText] = useState(() => (animated ? '' : fullText));

  useEffect(() => {
    if (!animated) {
      return;
    }

    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let isCancelled = false;

    const typeNextCharacter = () => {
      if (isCancelled) {
        return;
      }

      currentIndex += 1;
      setDisplayedText(fullText.slice(0, currentIndex));

      if (currentIndex < fullText.length) {
        timeoutId = setTimeout(typeNextCharacter, typingSpeedMs);
        return;
      }

      timeoutId = setTimeout(() => {
        if (isCancelled) {
          return;
        }

        currentIndex = 0;
        setDisplayedText('');
        timeoutId = setTimeout(typeNextCharacter, typingSpeedMs);
      }, typingRestartDelayMs);
    };

    timeoutId = setTimeout(typeNextCharacter, typingSpeedMs);

    return () => {
      isCancelled = true;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [animated]);

  const siteText = displayedText.slice(0, Math.min(displayedText.length, 4));
  const crafText = displayedText.slice(4);
  const isTypingComplete = displayedText.length >= fullText.length;

  return (
    <span className={`inline-flex items-center gap-1 m-0 p-0 leading-none ${className}`.trim()}>
      <Image
        src="/sitecraf_logo.webp"
        alt="Sitecraf logo"
        width={40}
        height={40}
        className={`${iconClassName} flex-shrink-0 object-contain`.trim()}
      />
      <span
        className={`brand-wordmark ${textClassName} m-0 p-0 leading-none whitespace-nowrap font-[family-name:var(--font-display)]`.trim()}
        aria-label="Sitecraf"
      >
        <span className="brand-wordmark__placeholder" aria-hidden="true">
          <span className="brand-wordmark__site">Site</span>
          <span className="brand-wordmark__craf">craf</span>
        </span>
        <span className="brand-wordmark__text">
          <span className="brand-wordmark__site">{siteText}</span>
          <span className="brand-wordmark__craf">{crafText}</span>
        </span>
        {animated && !isTypingComplete ? <span className="brand-wordmark__caret" aria-hidden="true" /> : null}
      </span>
    </span>
  );
}
