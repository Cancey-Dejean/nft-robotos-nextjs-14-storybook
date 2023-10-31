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
        <CardGetRobot robotHeadImg={robotHeadImg} title="GET YOUR ROBOTOS">
          <p>
            Robotos is a collection of droid characters designed by{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <strong> Pablo Stanley</strong>
            </a>{" "}
            and minted as NFTs. They are constructed from various metal outfits,
            tin faces, digital accessories, top pieces, faces, backpacks, arms,
            and colors. Get your own!
          </p>
        </CardGetRobot>
      </div>
    </div>
  )
}

export default GetRobots
