import { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetPageTitle } from 'hooks'
import { useRepositoriesInTheGithub } from 'services'
import * as S from './styles'
import * as C from 'components'

const PageExample3 = () => {
  useSetPageTitle({ pageTitle: 'Page Example 3' })
  const navigate = useNavigate()
  const refInput = useRef<HTMLInputElement>(null)
  const { getRepositoriesGithub, repositoriesGithub } =
    useRepositoriesInTheGithub()

  const searchRepositories = useCallback(async () => {
    const user = refInput.current?.value
    if (user) await getRepositoriesGithub(user)
  }, [getRepositoriesGithub])

  if (repositoriesGithub?.isLoading) return <h1>loading...</h1>

  return (
    <S.Container as="section">
      <C.TitleSection title="Search Github Repositories" />
      <C.TitleSection title="With Hook in Services without Redux" />

      <S.WrapperRepositories>
        {repositoriesGithub?.repositories?.map(repository => (
          <span key={repository.name}>{repository.name}</span>
        ))}

        {repositoriesGithub?.error && <b>{repositoriesGithub.error}</b>}
      </S.WrapperRepositories>

      <br />

      <C.Input
        ref={refInput}
        name="searchRepositoriesInTheGithub"
        placeholder="User name"
        aria-describedby="User name"
      />
      <S.BtnGroup>
        <C.Button
          fullWidth={true}
          color="red"
          size="large"
          text="Search Repositories"
          className="btn"
          aria-label="Search Repositories"
          onClick={searchRepositories}
        />

        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Return"
          className="btn"
          aria-label="Return"
          onClick={() => navigate('/')}
        />
      </S.BtnGroup>
    </S.Container>
  )
}

export default PageExample3
