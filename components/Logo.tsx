import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'stacked';
  className?: string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', color = 'currentColor' }) => {
  if (variant === 'icon') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20V80H35V45L50 80L65 45V80H80V20H60L50 45L40 20H20Z" fill={color}/>
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10V50H20V26.6L30 50L40 26.6V50H50V10H36.6L30 26.6L23.3 10H10Z" fill={color}/>
        <path d="M55 10L61 50H70L73 30L76 50H85L91 10H80L78 28L75 10H71L68 28L66 10H55Z" fill={color}/>
      </svg>
    );
  }

  // Full Horizontal
  // Centered text with textAnchor="middle" at x="50%" of viewBox width (225 of 450)
  return (
    <svg className={className} viewBox="0 0 450 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="225" y="45" textAnchor="middle" fontFamily="Syne" fontWeight="800" fontSize="40" letterSpacing="-1" fill={color}>MARKWON</text>
    </svg>
  );
};