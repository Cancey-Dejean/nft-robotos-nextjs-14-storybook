import Card from "./Card/"
import Text from "./microComponents/Text"

const YourStuffHero = () => {
  return (
    <div className="hero-ys">
      <div className="page-container">
        <div className="page-header">
          {/* <h1 className="section-title"></h1> */}
          <Text as="h1">Your Stuff</Text>

          <p>
            Here's a list of all robotos you own. Click to see the different
            assets.
          </p>
        </div>

        <div className="card-grid">
          <Card image="/images/animated-roboto.gif" text="roboto#1234" />
          <Card image="/images/animated-roboto3.gif" text="roboto#1234" />
          <Card image="/images/animated-roboto2.gif" text="roboto#1234" />
        </div>
      </div>
    </div>
  )
}

export default YourStuffHero
