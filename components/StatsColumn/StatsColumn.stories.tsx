import type { Meta, StoryObj } from "@storybook/react"
import StatsColumn from "./StatsColumn"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  // tags: ["autodocs"],
  title: "Components/StatsColumn",
  component: StatsColumn,
  args: {
    title: "Title",
    text: "Text",
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
} satisfies Meta<typeof StatsColumn>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return (
      <div className="rarity-list">
        <StatsColumn {...args} />
        <StatsColumn {...args} />
      </div>
    )
  },
}
