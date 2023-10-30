import Hero from "@/components/Hero"
import GetRobots from "@/components/GetRobots"
import Intermission from "@/components/Intermission"
import Rarity from "@/components/Rarity"
import Faq from "@/components/Faq"

export default function Home() {
  return (
    <main>
      <Hero btnText="Mint Robotos" showImages showInventoryCount />
      <GetRobots robotHeadImg="/images/robot-head.png" />
      <Intermission />
      <Rarity />
      <Faq />
    </main>
  )
}
