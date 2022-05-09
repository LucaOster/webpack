import { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetPageTitle } from 'hooks'
import { useExampleAsyncThunk } from 'store/exampleAsyncThunk'
import * as S from './styles'
import * as C from 'components'

const PageExample5 = () => {
  useSetPageTitle({ pageTitle: 'Page Example 5' })
  const navigate = useNavigate()
  const refInput = useRef<HTMLInputElement>(null)
  const { exampleAsyncThunk, setFetchRepositories } = useExampleAsyncThunk()

  const searchRepositories = useCallback(() => {
    const user = refInput.current?.value
    if (user) setFetchRepositories(user)
  }, [setFetchRepositories])

  if (exampleAsyncThunk?.isLoading) return <h1>loading...</h1>

  return (
    <S.Container as="section">
      <C.TitleSection title="Search Github Repositories" />
      <C.TitleSection title="with createAsyncThunk" />

      <S.WrapperRepositories>
        {exampleAsyncThunk?.repositories?.map(repository => (
          <span key={repository.name}>{repository.name}</span>
        ))}

        {exampleAsyncThunk?.error && <b>{exampleAsyncThunk.error}</b>}
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

export default PageExample5
