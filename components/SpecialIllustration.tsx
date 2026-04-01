"use client"
import { useEffect } from "react"

interface SpecialIllustrationProps {
  foilSrc: string
  cardSrc: string
}

export function SpecialIllustration({
  foilSrc,
  cardSrc,
}: SpecialIllustrationProps) {
  useEffect(() => {
    import("hover-tilt/web-component")
  }, [])
  return (
    <div>
      {/* @ts-ignore */}
      <hover-tilt
        shadow
        scale-factor={1.2}
        glare-mask={`url(${foilSrc})`}
        glare-mask-mode="luminance"
        glare-intensity={3}
        blend-mode="hard-light"
        class="sparkles [&::part(container)]:rounded-[4.55%/3.5%]"
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
        .sparkles::part(tilt)::before {
            --sparkle-rainbow-gradient: linear-gradient(to top left, #f9b3eb, #e2a6fc, #88a2f8, #a2f5a9 90%);
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
