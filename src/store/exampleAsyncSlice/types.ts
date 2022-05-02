import { PayloadAction } from '@reduxjs/toolkit'
import { getRepositoriesInTheGithubTypes } from 'services/repositories/get/api/types'

export type PayloadType = PayloadAction<getRepositoriesInTheGithubTypes>
