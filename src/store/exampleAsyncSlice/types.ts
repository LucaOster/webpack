import { PayloadAction } from '@reduxjs/toolkit'

export type getRepositoriesInTheGithubTypes = {
  repositories: { name: string }[]
  error: string
}

export type PayloadType = PayloadAction<getRepositoriesInTheGithubTypes>
