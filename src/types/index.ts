import { ReactNode } from 'react'

export interface TypeIconProps {
  className?: string
  fill?: string
  width?: number
  height?: number
}

export interface BtnProps {
  className?: string
  children?: ReactNode
  onClick?:() => void
}

export type ComponentProps = BtnProps
