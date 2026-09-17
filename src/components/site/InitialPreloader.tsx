import { useEffect, useState } from "react";
import logo from "@/assets/logo/logo.png";

export function InitialPreloader() {
  const [loading, setLoading] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  const handleComplete = () => {
    setFadingOut(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    // Backup safety timer in case animation event is blocked
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      onClick={handleComplete}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center surface-dark cursor-pointer transition-all duration-300 ease-out ${
        fadingOut ? "pointer-events-none opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      aria-hidden={fadingOut ? "true" : "false"}
    >
      {/* Ambient background glowing rings */}
      <div className="absolute size-80 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div className="absolute size-48 rounded-full bg-primary/30 blur-xl" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Animated Logo Container with Glowing Ring - Clean Circle */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/50 via-primary/20 to-transparent blur-md animate-spin [animation-duration:2.5s]" />
          <div className="relative flex size-32 items-center justify-center overflow-hidden rounded-full border-2 border-primary/50 bg-[#fff9ee] p-2 shadow-2xl backdrop-blur-md sm:size-40">
            <img
              src={logo}
              alt="Navavi Chai & Cafe"
              className="size-full rounded-full object-cover transition-transform duration-500 hover:scale-105 drop-shadow-md"
            />
          </div>
        </div>

        {/* Brand Text */}
        <h2 className="font-display text-2xl font-bold tracking-wide text-gradient-gold sm:text-3xl">
          NAVAVI CHAI &amp; CAFE
        </h2>
        <p className="mt-2 font-display text-sm italic tracking-widest text-primary/90 sm:text-base">
          Shahi Swad Har Dil Ke Pass
        </p>

        {/* Animated Gold Progress Bar — when this line finishes, close preloader and open website */}
        <div className="mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-espresso-foreground/20 sm:w-60">
          <div
            onAnimationEnd={handleComplete}
            className="h-full rounded-full bg-gradient-to-r from-primary via-gold to-primary"
            style={{
              animation: "preloader-fill 2.5s linear forwards",
            }}
          />
        </div>

        <p className="mt-4 text-xs tracking-wider text-espresso-foreground/40 sm:text-xs">
          Tap anywhere to enter
        </p>
      </div>
    </div>
  );
}


