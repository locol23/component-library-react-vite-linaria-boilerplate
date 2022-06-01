import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import * as stories from './PrimaryButton.stories'

describe('PrimaryButton', () => {
  const { Default } = composeStories(stories)

  test('should render primary button with default args', () => {
    render(<Default />)

    const buttonElement = screen.getAllByText('Primary Button')

    expect(buttonElement[0]).not.toBeNull()
  })
})
