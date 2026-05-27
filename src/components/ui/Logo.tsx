import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 34 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#logo-circle-clip)">
        {/* Top-Left: Red */}
        <rect x="0" y="0" width="50" height="50" fill="#FF2B2B" />
        
        {/* Top-Right: White with Black 'J' */}
        <rect x="50" y="0" width="50" height="50" fill="#FFFFFF" />
        <text
          x="75"
          y="25"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontWeight="600"
          fontSize="36"
          fill="#000000"
          textAnchor="middle"
          dominantBaseline="central"
        >
          J
        </text>

        {/* Bottom-Left: White with Black 'S' */}
        <rect x="0" y="50" width="50" height="50" fill="#FFFFFF" />
        <text
          x="25"
          y="75"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontWeight="600"
          fontSize="36"
          fill="#000000"
          textAnchor="middle"
          dominantBaseline="central"
        >
          S
        </text>

        {/* Bottom-Right: Red */}
        <rect x="50" y="50" width="50" height="50" fill="#FF2B2B" />
      </g>
      <defs>
        <clipPath id="logo-circle-clip">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
