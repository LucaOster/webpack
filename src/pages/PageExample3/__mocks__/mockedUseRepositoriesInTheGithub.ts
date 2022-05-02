const getRepositoriesGithub = jest.fn()
export const useRepositoriesInTheGithub1 = {
  getRepositoriesGithub,
  repositoriesGithub: {
    isLoading: false,
    repositories: [{ name: 'example1' }, { name: 'example2' }],
    error: ''
  }
}
export const useRepositoriesInTheGithub2 = {
  getRepositoriesGithub,
  repositoriesGithub: {
    isLoading: false,
    repositories: [],
    error: 'Not found'
  }
}
export const useRepositoriesInTheGithub3 = {
  getRepositoriesGithub,
  repositoriesGithub: {
    isLoading: true,
    repositories: [],
    error: ''
  }
}
