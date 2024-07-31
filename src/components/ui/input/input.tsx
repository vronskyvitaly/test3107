'use client'
import s from './input.module.scss'
import { ComponentPropsWithRef, forwardRef } from 'react'

type Props = {
  counter?: string
} & ComponentPropsWithRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ type = 'search', counter, ...rest }, ref) => {
    return (
      <div className={s.root}>
        <input
          ref={ref}
          {...rest}
          className={type === 'search' ? s.search : ''}
        />
        <span className={s.counter}>{counter ?? ' '}</span>
      </div>
    )
  }
)

Input.displayName = 'Input'
