import type { Meta, StoryObj } from "@storybook/react"
import Inventory from "./Inventory"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/Inventory",
  component: Inventory,
  args: {
    invAvailable: 8208,
    invTotal: 9999,
    cryptoType: "ETH",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    textColor: {
      control: {
        type: "color",
      },
    },
  },
} satisfies Meta<typeof Inventory>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return <Inventory {...args} />
  },
}

export const WithColor: Story = {
  render: (args) => {
    return <Inventory textColor="var(--white)" bgColor="var(--red)" {...args} />
  },
}
