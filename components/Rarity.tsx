import Image from "next/image"
import { RarityTypeImg } from "./microComponents/images"
import { rarityList, typesList } from "@/constants"
import Text from "./microComponents/Text"
import StatRow, { StatRowProps } from "./StatRow/StatRow"

export type RarityProps = {
  title?: string
  desc?: string
  typesList: Array<StatRowProps>
  rarityList: Array<StatRowProps>
}

const Rarity = ({
  title,
  desc,
  typesList = [],
  rarityList = [],
}: RarityProps) => {
  return (
    <div className="rarity" id="rarity">
      <div className="container">
        <div className="rarity-card">
          <Text as="h3" size="size-48" label="">
            {title}
          </Text>

          <p>{desc}</p>

          <div className="rarity-card-grid">
            <div className="rarity-list">
              <StatRow columns={typesList} />

              <div className="type-img">
                <Image src={RarityTypeImg} alt="" />
              </div>
            </div>

            <div className="rarity-list">
              <StatRow columns={rarityList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rarity
