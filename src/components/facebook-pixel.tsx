"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;

    if(window && 'fbq' in window && typeof window.fbq === 'function') {
        window.fbq("track", "PageView");
    }
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        id="fb-pixel"
        src="/scripts/pixel.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default FacebookPixel;