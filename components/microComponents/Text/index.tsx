export type TextProps = {
  /**
   * Description goes here
   */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  /**
   * Description goes here
   */
  size?: "size-16" | "size-28" | "size-48" | "size-display"
  /**
   * Description goes here
   */
  label?: string
  /**
   * Description goes here
   */
  children: React.ReactNode
  /**
   * Description goes here
   */
  className?: string
}

const Text = ({
  as: Element = "h1",
  size,
  label = "Heading",
  children,
  className = "",
}: TextProps) => {
  return (
    <Element className={`section-title ${className} ${size ? size : ""}`}>
      {label !== "" ? label : children}
    </Element>
  )
}

export default Text
