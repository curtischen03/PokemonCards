"use client"
import { useEffect } from "react"

interface FullArtFoilProps {
  foilSrc: string
  cardSrc: string
}

export function FullArtFoil({ foilSrc, cardSrc }: FullArtFoilProps) {
  useEffect(() => {
    import("hover-tilt/web-component")
  }, [])
  return (
    <div>
      {/* @ts-ignore */}
      <hover-tilt
        shadow
        scale-factor={1.1}
        glare-mask={`url(${foilSrc})`}
        glare-mask-mode="luminance"
        glare-intensity={1.2}
        blend-mode="hard-light"
        class="rainbow [&::part(container)]:rounded-[4.55%/3.5%]"
      >
        <img
          src={cardSrc}
          alt="Pokémon"
          className="w-[300px] rounded-[inherit] sm:w-[400px]"
        />
        {/* @ts-ignore */}
      </hover-tilt>
      <style>
        {`
        .rainbow::part(tilt)::before {
            --sparkle-rainbow-gradient: repeating-linear-gradient( 
            133deg, 
            #0e152e 0%,          /* Start Dark */
            #0e152e 1%,          /* Hold Dark briefly */
            #f9b3eb 6%,          /* Very slow fade into Pink */
            #e2a6fc 8%,          /* Purple peak */
            #88a2f8 10%,         /* Blue peak */
            #a2f5a9 12%,         /* Green peak */
            #0e152e 18%,         /* Very long, soft fade back to Dark */
            #0e152e 20%          /* Total cycle expanded to 20% for more "breathing room" */
            );
            --sparkles-image: url(/sparkles.webp);
            --sparkles-offset: calc(50% + var(--hover-tilt-x, 0) * 1.5px) calc(50% + var(--hover-tilt-y, 0) * 1.5px);
            background-image:
            var(--sparkle-rainbow-gradient),
            var(--sparkles-image),
            var(--hover-tilt-default-gradient);
            background-size: cover, 200px 200px, cover;
            background-position: center, var(--sparkles-offset), center;
            background-repeat: no-repeat, repeat, no-repeat;
            background-blend-mode: color-burn, color-dodge;
            opacity: calc(var(--hover-tilt-opacity, 0) * 0.6);
            will-change: background-image, background-position, opacity;
        }`}
      </style>
    </div>
  )
}
