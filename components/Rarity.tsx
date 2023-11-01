import Image from "next/image"
import Text from "./microComponents/Text"
import StatsColumn from "./StatsColumn/StatsColumn"
import { rarityList, typesList } from "@/constants"

export type RarityProps = {
  title?: string
  desc?: string
  listImgOne?: string
}

const Rarity = ({ title, desc, listImgOne = "" }: RarityProps) => {
  return (
    <div className="rarity" id="rarity">
      <div className="container">
        <div className="rarity-card">
          <Text as="h3" size="size-48" label="">
            {title}
          </Text>

          <p>{desc}</p>

          <div className="rarity-card-grid">
            <div className="types-area">
              <div className="rarity-list">
                <h4 className="rarity-title">Types</h4>
                {typesList?.map((item) => (
                  <StatsColumn
                    key={item.title}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </div>

              <div className="type-img">
                <Image src={listImgOne} width={318} height={270} alt="" />
              </div>
            </div>

            <div className="rarity-list">
              <h4 className="rarity-title">Variations</h4>
              {rarityList?.map((item) => (
                <StatsColumn
                  key={item.title}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rarity
