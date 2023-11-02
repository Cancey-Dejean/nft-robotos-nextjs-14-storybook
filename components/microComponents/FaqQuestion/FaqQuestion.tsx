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
  imgAlt = "",
  imgHeight = 57,
  imgWidth = 90,
  imgSrc = "http://dummyimage.com/.png/eb0d18/ffffff",
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
      <h3 className="faq-question-title size-28">{question}</h3>
      <div className="faq-question-body">{children}</div>
    </div>
  )
}

export default FaqQuestion
