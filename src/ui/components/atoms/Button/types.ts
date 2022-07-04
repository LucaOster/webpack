import { ButtonHTMLAttributes, ReactNode } from 'react'

export type SizeProps = 'small' | 'medium' | 'large' | 'xLarge'

export type ColorProps = 'gray' | 'blue' | 'red'

export type BtnProps = {
  icon?: ReactNode
  text?: string
  size: SizeProps
  color: ColorProps
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
