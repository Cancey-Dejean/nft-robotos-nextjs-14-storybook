export type CardProps = {
  image: string
  text: string
  children?: React.ReactNode
}

const Card = ({
  image = "http://dummyimage.com/494.png/eb0d18/ffffff",
  text = "Title",
  children,
}: CardProps) => {
  return (
    <div className="card">
      <img src={image} alt="" />

      <h4 className="card-title">{text}</h4>
      {children}
    </div>
  )
}

export default Card
