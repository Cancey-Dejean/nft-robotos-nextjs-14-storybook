import Hero from "@/components/Hero"
import GetRobots from "@/components/GetRobots"
import Intermission from "@/components/Intermission"
import Rarity from "@/components/Rarity"
import Faq from "@/components/Faq"

export default function Home() {
  return (
    <main>
      <Hero />
      <GetRobots />
      <Intermission />
      <Rarity />
      <Faq />
    </main>
  )
}
