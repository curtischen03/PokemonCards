"use client"
import { useEffect } from "react"

interface ReverseHoloProps {
  foilSrc: string
  cardSrc: string
}

export function ReverseHolo({ foilSrc, cardSrc }: ReverseHoloProps) {
  useEffect(() => {
    import("hover-tilt/web-component")
  }, [])

  return (
    <div>
      {/* @ts-ignore */}
      <hover-tilt
        shadow="true"
        scale-factor="1.1"
        glare-mask={`url(${foilSrc})`}
        glare-mask-mode="alpha"
        glare-intensity={4}
        blend-mode="luminosity"
        className="[&::part(container)]:rounded-[4.55%/3.5%]"
      >
        <img
          src={cardSrc}
          alt="Pokémon"
          loading="lazy"
          className="w-[300px] rounded-[inherit] sm:w-[400px]"
        />
        {/* @ts-ignore */}
      </hover-tilt>
    </div>
  )
}
