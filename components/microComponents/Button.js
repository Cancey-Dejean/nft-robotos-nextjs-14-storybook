import Link from "next/link"

const Button = ({ text, link, btnColor }) => {
  return (
    <div className="button-container">
      <Link href={link} className={`btn-prime ${btnColor}`}>
        {text}
      </Link>
    </div>
  )
}

export default Button
