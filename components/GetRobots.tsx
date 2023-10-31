import CardGetRobot from "./CardGetRobot/CardGetRobot"

const GetRobots = () => {
  return (
    <div className="get-robots">
      <div className="container">
        <CardGetRobot
          robotHeadImg="/images/robot-head.png"
          title="GET YOUR ROBOTOS"
          btnText="Mint Robotos"
          showInventoryCount
        >
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
