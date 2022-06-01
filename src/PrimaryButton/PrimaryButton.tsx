import { FC } from 'react'
import styled from 'styled-components'
import { colors } from '../styles'
import { typography } from '../styles/typography'

type PrimaryButtonProps = {
  fontSize: string
  onClick?: () => void
  text: string
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ text, onClick, fontSize }) => (
  <>
    <Button type="button" onClick={onClick}>
      <Text fontSize={fontSize}>{text}</Text>
    </Button>
  </>
)

const Text = styled.span<{ fontSize: string }>(({ fontSize }) => ({
  fontSize,
  fontWeight: typography.weight.bold,
  color: colors.light.black,
}))

const Button = styled.button({
  backgroundColor: colors.light.primary,
  padding: '10px 25px',
})
