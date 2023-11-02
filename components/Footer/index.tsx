import Link from "next/link"
import Button from "../microComponents/Button/Button"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="domo-text">DOMO</div>
      <div className="domo-text purple">ARIGATO</div>

      <Button text="Mint Robotos" linkUrl="/" btnColor="purple" />

      <div className="follow">
        Follow Robotos on{" "}
        <Link href="#">
          <strong>Twitter</strong>
        </Link>{" "}
        or{" "}
        <Link href="#">
          <strong>Discord</strong>
        </Link>{" "}
        <br />
        <Link href="#">
          <strong>Smart Contract</strong>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
