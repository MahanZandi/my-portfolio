"use client";

interface SpinningTextProps {
  text: string;
  radius?: number;
  fontSize?: number;
  duration?: number;
  className?: string;
}

export function SpinningText({
  text,
  radius = 70,
  fontSize = 11,
  duration = 10,
  className = "",
}: SpinningTextProps) {
  const chars = text.split("");
  const angleStep = 360 / chars.length;

  return (
    <div className={`relative ${className}`} style={{ width: radius * 2, height: radius * 2 }}>
      <div
        className="absolute inset-0 rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-900/50 border border-white/40 dark:border-gray-700/60"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      <div
        className="absolute inset-0 animate-spin"
        style={{ animationDuration: `${duration}s`, animationDirection: 'reverse' }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 font-bold text-gray-900 dark:text-gray-100"
            style={{
              fontSize: `${fontSize}px`,
              transform: `rotate(${i * angleStep}deg) translateY(-${radius - 10}px)`,
              letterSpacing: '0.8em',
              transformOrigin: "0 0",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
