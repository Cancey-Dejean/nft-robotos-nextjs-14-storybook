import Image from "next/image"
import Button from "../microComponents/Button/Button"
import Inventory from "../microComponents/Inventory"

type CardGetRobotProps = {
  robotHeadImg?: string
  title: string
  children: React.ReactNode
}

const CardGetRobot = ({
  robotHeadImg = "http://dummyimage.com/190.png/eb0d18/ffffff",
  title = "Title",
  children,
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

        <h3 className="section-title">{title}</h3>

        {children}

        <Button text="Mint Robotos" linkUrl="/" btnColor="pink" />

        <Inventory bgColor="grey-bg" />
      </div>
    </div>
  )
}

export default CardGetRobot
