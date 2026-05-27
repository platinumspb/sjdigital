import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-8.5 h-8.5' }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} rounded-full shadow-sm shrink-0 select-none`}
    >
      <defs>
        <clipPath id="logo-circle">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-circle)">
        {/* Checkered Background */}
        <rect x="0" y="0" width="50" height="50" fill="#FF2D2D" />
        <rect x="50" y="0" width="50" height="50" fill="#FFFFFF" />
        <rect x="0" y="50" width="50" height="50" fill="#FFFFFF" />
        <rect x="50" y="50" width="50" height="50" fill="#FF2D2D" />
        
        {/* Letters */}
        <text 
          x="75" 
          y="26" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="40" 
          fill="#000000" 
          textAnchor="middle" 
          dominantBaseline="central"
        >
          J
        </text>
        <text 
          x="25" 
          y="74" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="40" 
          fill="#000000" 
          textAnchor="middle" 
          dominantBaseline="central"
        >
          S
        </text>
      </g>
    </svg>
  );
};

export default Logo;
