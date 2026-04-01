import { SpecialIllustration } from "@/components/SpecialIllustration"
import { ReverseHolo } from "@/components/ReverseHolo"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-20 bg-slate-950 py-20">
      <SpecialIllustration
        foilSrc="clefairyexfoil.webp"
        cardSrc="clefairyex.webp"
      />
      <ReverseHolo foilSrc="tyrantrumfoil.webp" cardSrc="tyrantrum.png" />
    </div>
  )
}
