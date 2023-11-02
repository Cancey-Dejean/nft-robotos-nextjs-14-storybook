import type { Meta, StoryObj } from "@storybook/react"
import FaqQuestion from "./FaqQuestion"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  // tags: ["autodocs"],
  title: "Components/FaqQuestion",
  component: FaqQuestion,
  args: {
    imgAlt: "Placeholder",
    imgHeight: 57,
    imgWidth: 90,
    imgSrc: "http://dummyimage.com/90.png/eb0d18/ffffff",
    question: "Question?",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sapiente odio nisi ratione, ex inventore aliquid minus nam mollitia quibusdam.",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof FaqQuestion>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <FaqQuestion {...args} />
  },
}
