import React from 'react';

interface OfficialStoreBadgesProps {
  appStoreUrl?: string;
  appStoreStatus?: 'active' | 'coming_soon';
  googlePlayUrl?: string;
  googlePlayStatus?: 'active' | 'coming_soon';
  onComingSoon: (platform: 'apple' | 'google') => void;
  className?: string;
}

export const OfficialStoreBadges: React.FC<OfficialStoreBadgesProps> = ({
  appStoreUrl,
  appStoreStatus = 'coming_soon',
  googlePlayUrl,
  googlePlayStatus = 'coming_soon',
  onComingSoon,
  className = '',
}) => {
  const handleAppleClick = (e: React.MouseEvent) => {
    if (!appStoreUrl || appStoreStatus === 'coming_soon') {
      e.preventDefault();
      onComingSoon('apple');
    }
  };

  const handleGoogleClick = (e: React.MouseEvent) => {
    if (!googlePlayUrl || googlePlayStatus === 'coming_soon') {
      e.preventDefault();
      onComingSoon('google');
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* Apple App Store Official Badge */}
      <a
        href={appStoreUrl || '#'}
        onClick={handleAppleClick}
        target={appStoreUrl ? '_blank' : undefined}
        rel="noopener noreferrer"
        aria-label="Download 7CV on the Apple App Store"
        className="group relative inline-flex items-center justify-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
      >
        <svg
          className="h-10 w-auto drop-shadow-sm transition-opacity group-hover:opacity-95"
          viewBox="0 0 120 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="120" height="40" rx="7" fill="#000000" stroke="#4B5563" strokeWidth="0.8" />
          {/* Apple Logo */}
          <path
            d="M24.7 20.3c0-2.4 1.9-3.6 2-3.7-1.1-1.6-2.8-1.8-3.4-1.9-1.4-.2-2.8.8-3.6.8-.7 0-1.9-.8-3.1-.8-1.6 0-3 1-3.8 2.5-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2-.1 1.7-.8 3.1-.8 1.4 0 1.9.8 3.1.8 1.3 0 2.1-1.2 2.9-2.4 1-1.4 1.4-2.8 1.4-2.9-.1-.1-2.8-1.1-2.8-3.6z"
            fill="#FFFFFF"
          />
          <path
            d="M22.5 13.8c.6-.8 1-1.9.9-3-.9.1-2 .6-2.6 1.4-.6.7-1 1.8-.9 2.9 1 0 2-.5 2.6-1.3z"
            fill="#FFFFFF"
          />
          {/* Text: Download on the */}
          <text x="36" y="15" fill="#FFFFFF" fontSize="6.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="400">
            Download on the
          </text>
          {/* Text: App Store */}
          <text x="36" y="27" fill="#FFFFFF" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" letterSpacing="-0.2">
            App Store
          </text>
        </svg>
        {appStoreStatus === 'coming_soon' && (
          <span className="sr-only"> (Coming Soon)</span>
        )}
      </a>

      {/* Google Play Store Official Badge */}
      <a
        href={googlePlayUrl || '#'}
        onClick={handleGoogleClick}
        target={googlePlayUrl ? '_blank' : undefined}
        rel="noopener noreferrer"
        aria-label="Get 7CV on Google Play"
        className="group relative inline-flex items-center justify-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
      >
        <svg
          className="h-10 w-auto drop-shadow-sm transition-opacity group-hover:opacity-95"
          viewBox="0 0 135 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="135" height="40" rx="7" fill="#000000" stroke="#4B5563" strokeWidth="0.8" />
          {/* Google Play triangle shapes */}
          <path d="M14.5 10.5L24.8 20L14.5 29.5V10.5Z" fill="#3B82F6" />
          <path d="M24.8 20L14.5 10.5L27.5 17.5L24.8 20Z" fill="#10B981" />
          <path d="M24.8 20L27.5 17.5L30.2 19L24.8 20Z" fill="#F59E0B" />
          <path d="M24.8 20L30.2 19L27.5 22.5L24.8 20Z" fill="#EF4444" />
          <path d="M24.8 20L27.5 22.5L14.5 29.5L24.8 20Z" fill="#EC4899" />
          {/* Text: GET IT ON */}
          <text x="36" y="14.5" fill="#9CA3AF" fontSize="6.2" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" letterSpacing="0.4">
            GET IT ON
          </text>
          {/* Text: Google Play */}
          <text x="36" y="27" fill="#FFFFFF" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" letterSpacing="-0.2">
            Google Play
          </text>
        </svg>
        {googlePlayStatus === 'coming_soon' && (
          <span className="sr-only"> (Coming Soon)</span>
        )}
      </a>
    </div>
  );
};
