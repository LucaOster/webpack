import { PayloadAction } from '@reduxjs/toolkit'

export type ExampleWithPayloadType = {
  text: string
}

export type ExemploTextProp = {
  exemploText: string
}

export type PayloadType = PayloadAction<ExemploTextProp>
