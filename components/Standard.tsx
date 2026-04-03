"use client"
import { useEffect } from "react"

interface StandardProps {
  cardSrc: string
}

export function Standard({ cardSrc }: StandardProps) {
  useEffect(() => {
    import("hover-tilt/web-component")
  }, [])

  return (
    <div>
      {/* @ts-ignore */}
      <hover-tilt
        shadow
        scale-factor={1.1}
        className="[&::part(container)]:rounded-[4.55%/3.5%]"
      >
        <img
          src={cardSrc}
          alt="Pokémon"
          loading="lazy"
          className="w-[300px] rounded-[inherit] rounded-xl sm:w-[400px]"
        />
        {/* @ts-ignore */}
      </hover-tilt>
    </div>
  )
}
