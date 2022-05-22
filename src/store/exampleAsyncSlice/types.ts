import { PayloadAction } from '@reduxjs/toolkit'

export type GetRepositoriesInTheGithubTypes = {
  repositories: { name: string }[]
  error: string
}

export type PayloadType = PayloadAction<GetRepositoriesInTheGithubTypes>
