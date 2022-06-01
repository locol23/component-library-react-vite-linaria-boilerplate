import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { typography } from '../styles'
import { PrimaryButton } from './PrimaryButton'

type Story = ComponentStoryObj<typeof PrimaryButton>

export default {
  args: {
    fontSize: typography.size.m,
    text: 'Primary Button',
    onClick: () => alert('PrimaryButton'),
  },
  component: PrimaryButton,
  title: 'PrimaryButton',
} as ComponentMeta<typeof PrimaryButton>

export const Default = {} as Story
