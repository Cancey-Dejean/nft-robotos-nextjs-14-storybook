import Link from "next/link"
import { type } from "os"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export type ButtonProps = {
  id?: string
  text: string
  linkUrl?: string
  btnColor?: string
  icon?: React.ReactNode
  ariaLabel?: string
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  id,
  text = "Button",
  linkUrl = "",
  btnColor,
  ariaLabel = text,
  icon = null,
  ...props
}: ButtonProps) => {
  const iconContent = icon ? icon : null
  const buttonClasses = btnColor !== "" ? btnColor : null
  const textContent = text !== "" ? text : null

  return (
    <div className="button-container">
      {linkUrl !== "" ? (
        <Link
          href={linkUrl}
          className={`btn-prime ${buttonClasses}`}
          aria-label={text}
          {...props}
        >
          {textContent}
          {iconContent}
        </Link>
      ) : (
        <button
          id={id}
          className={`btn-prime ${buttonClasses}`}
          aria-label={text}
          {...props}
        >
          {textContent}
          {iconContent}
        </button>
      )}
    </div>
  )
}

export default Button
