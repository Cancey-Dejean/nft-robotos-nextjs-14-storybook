import Image from "next/image"
import Button from "../microComponents/Button/Button"
import Inventory from "../microComponents/Inventory"

type CardGetRobotProps = {
  robotHeadImg?: string
}

const CardGetRobot = ({
  robotHeadImg = "http://dummyimage.com/190.png/eb0d18/ffffff",
}: CardGetRobotProps) => {
  return (
    <div className="get-robot-card">
      <div className="get-robot-card-head">
        <div className="get-robot-card-head-img">
          <Image
            src={robotHeadImg}
            className="robot-head"
            loading="lazy"
            alt=""
            width={190}
            height={190}
          />
        </div>

        <h3 className="section-title">GET YOUR ROBOTOS</h3>

        <p>
          Robotos is a collection of droid characters designed by{" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <strong> Pablo Stanley</strong>
          </a>{" "}
          and minted as NFTs. They are constructed from various metal outfits,
          tin faces, digital accessories, top pieces, faces, backpacks, arms,
          and colors. Get your own!
        </p>

        <Button text="Mint Robotos" linkUrl="/" btnColor="pink" />

        <Inventory bgColor="grey-bg" />
      </div>
    </div>
  )
}

export default CardGetRobot
