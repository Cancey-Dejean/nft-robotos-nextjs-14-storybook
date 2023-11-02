import type { Meta, StoryObj } from "@storybook/react"
import CardGetRobot from "./CardGetRobot"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  // tags: ["autodocs"],
  title: "Components/Cards/CardGetRobot",
  component: CardGetRobot,
  args: {
    showHeadImg: true,
    robotHeadImg: "http://dummyimage.com/190.png/eb0d18/ffffff",
    title: "Title",
    children: <p>Content goes here</p>,
    showInventoryCount: false,
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // btnColor: {
    //   control: {
    //     type: "select",
    //     options: ["mint", "pink", "purple"],
    //   },
    // },
    // icon: {
    //   control: false,
    // },
  },
} satisfies Meta<typeof CardGetRobot>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return (
      <CardGetRobot {...args}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora
          nesciunt excepturi aliquam doloremque quod debitis impedit animi totam
          maxime inventore aspernatur, qui reprehenderit odio doloribus modi
          labore natus laboriosam?
        </p>
      </CardGetRobot>
    )
  },
}
