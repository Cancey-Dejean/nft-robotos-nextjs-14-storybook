import Image from "next/image"
import Button, { ButtonProps } from "../microComponents/Button/Button"
import Inventory from "../microComponents/Inventory"

type CardGetRobotProps = {
  robotHeadImg?: string
  title: string
  children: React.ReactNode
  showInventoryCount?: boolean
  showHeadImg?: boolean
  linkUrl?: ButtonProps["linkUrl"]
  btnText?: ButtonProps["text"]
  btnColor?: ButtonProps["btnColor"]
}

const CardGetRobot = ({
  showHeadImg = true,
  robotHeadImg = "http://dummyimage.com/190.png/eb0d18/ffffff",
  title = "Title",
  children,
  showInventoryCount = true,
  btnColor = "pink",
  btnText = "Button",
  linkUrl = "#",
}: CardGetRobotProps) => {
  return (
    <div className="get-robot-card">
      <div className="get-robot-card-head">
        {showHeadImg && (
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
        )}

        {title !== "" && <h3 className="section-title">{title}</h3>}

        {children}

        {btnText !== "" && (
          <Button text={btnText} linkUrl={linkUrl} btnColor={btnColor} />
        )}

        {showInventoryCount && <Inventory bgColor="grey-bg" />}
      </div>
    </div>
  )
}

export default CardGetRobot
