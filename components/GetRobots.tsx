import CardGetRobot from "./CardGetRobot/CardGetRobot"

export type GetRobotsProps = {
  robotHeadImg?: string
}

const GetRobots = ({
  robotHeadImg = "http://dummyimage.com/190.png/eb0d18/ffffff",
}: GetRobotsProps) => {
  return (
    <div className="get-robots">
      <div className="container">
        <CardGetRobot robotHeadImg={robotHeadImg} />
      </div>
    </div>
  )
}

export default GetRobots
