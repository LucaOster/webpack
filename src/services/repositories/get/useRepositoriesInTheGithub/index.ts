import { useState } from 'react'
import { getRepositoriesInTheGithub } from '../api'
import { getRepositoriesInTheGithubTypes } from '../api/types'

export const useRepositoriesInTheGithub = () => {
  const [repositoriesGithub, setRepositoriesGithub] =
    useState<getRepositoriesInTheGithubTypes>()

  const getRepositoriesGithub = async (user: string): Promise<void> => {
    setRepositoriesGithub({ repositories: [], error: '', isLoading: true })

    const { repositories, error, isLoading } = await getRepositoriesInTheGithub(
      user
    )

    setRepositoriesGithub({ repositories, error, isLoading })
  }

  return { getRepositoriesGithub, repositoriesGithub }
}
