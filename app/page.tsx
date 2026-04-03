import { SpecialIllustration } from "@/components/SpecialIllustration"
import { ReverseHolo } from "@/components/ReverseHolo"
import { Standard } from "@/components/Standard"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-20 bg-slate-950 py-20">
      <h1 className="shimmer text-4xl font-bold text-gray-400 shimmer-color-amber-50 md:text-5xl lg:text-6xl">
        Pokemon Cards
      </h1>
      <div className="mx-10 grid auto-rows-fr grid-cols-1 gap-15 sm:mx-5 lg:grid-cols-2">
        <SpecialIllustration
          foilSrc="clefairyexfoil.webp"
          cardSrc="clefairyex.webp"
        />
        <SpecialIllustration
          foilSrc="garchompexfoil.webp"
          cardSrc="garchompex.png"
        />
        <SpecialIllustration
          foilSrc="mewtwoexfoil.webp"
          cardSrc="mewtwoex.png"
        />
        <ReverseHolo foilSrc="tyrantrumfoil.webp" cardSrc="tyrantrum.png" />
        <Standard cardSrc="garchomp.jpg" />
      </div>
    </div>
  )
}
