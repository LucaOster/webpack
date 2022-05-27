import { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetPageTitle } from 'hooks'
import { useGetRepositoriesWithRedux } from 'services'
import { useExampleLoading } from 'store/exampleLoading'
import * as S from './styles'
import * as C from 'components'

const PageExample3 = () => {
  useSetPageTitle({ pageTitle: 'Page Example 4' })
  const navigate = useNavigate()
  const refInput = useRef<HTMLInputElement>(null)
  const { getFetchRepositories, exampleAsyncSlice } =
    useGetRepositoriesWithRedux()
  const { isLoading } = useExampleLoading()

  const searchRepositories = useCallback(async () => {
    const user = refInput.current?.value
    if (user) await getFetchRepositories(user)
  }, [getFetchRepositories])

  if (isLoading) return <h1>loading...</h1>

  return (
    <S.Container role="main">
      <C.TitleSection title="Search Github Repositories" />
      <C.TitleSection
        title="With Hook in Services saving data in the Store"
        as="h2"
      />

      <S.WrapperRepositories>
        {exampleAsyncSlice?.data?.map(repository => (
          <span key={repository.name}>{repository.name}</span>
        ))}

        {!!exampleAsyncSlice?.error && <b>{exampleAsyncSlice.error}</b>}
      </S.WrapperRepositories>

      <br />

      <C.Input
        ref={refInput}
        name="searchRepositoriesInTheGithub"
        placeholder="User name"
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
