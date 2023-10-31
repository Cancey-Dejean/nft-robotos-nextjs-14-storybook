import Image from "next/image"

type FaqQuestionProps = {
  imgSrc: string
  imgHeight: number
  imgWidth: number
  imgAlt: string
  question?: string
  children?: React.ReactNode
}

const FaqQuestion = ({
  imgAlt,
  imgHeight,
  imgWidth,
  imgSrc,
  question = "Question?",
  children = "Answer goes here",
}: FaqQuestionProps) => {
  return (
    <div className="faq-question">
      <div className="faq-question-img">
        <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          loading="lazy"
          alt={imgAlt}
        />
      </div>
      <div className="faq-question-title">{question}</div>
      <div className="faq-question-body">{children}</div>
    </div>
  )
}

export default FaqQuestion
