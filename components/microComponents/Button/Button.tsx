import Link from "next/link"
import { type } from "os"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export type ButtonProps = {
  /**
   * Description goes here
   */
  id?: string
  /**
   * Description goes here
   */
  text: string
  /**
   * Description goes here
   */
  linkUrl?: string
  /**
   * Description goes here
   */
  btnColor?: "mint" | "pink" | "purple"

  /**
   * Description goes here
   */
  icon?: React.ReactNode
  /**
   * Description goes here
   */
  ariaLabel?: string
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  text = "Button",
  linkUrl = "",
  btnColor = "mint",
  ariaLabel = text,
  icon = null,
  id = text,
  ...props
}: ButtonProps) => {
  const iconContent = icon ? icon : null
  const buttonClasses = btnColor ? btnColor : ""
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
