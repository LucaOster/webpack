import { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetPageTitle } from 'hooks'
import { useGetRepositoriesWithRedux } from 'data'
import { useIsLoading } from 'infra/store/isLoading/useAdapter'
import * as S from './styles'
import * as C from 'ui/components'

const Example3 = () => {
  const [disabledButton, setDisabledButton] = useState(true)
  useSetPageTitle({ pageTitle: 'Page Example 4' })
  const navigate = useNavigate()
  const refInput = useRef<HTMLInputElement>(null)
  const user = (): string | undefined => refInput.current?.value?.trim()
  const { getFetchRepositories, exampleAsyncSlice } =
    useGetRepositoriesWithRedux()
  const { isLoading } = useIsLoading()

  const searchRepositories: () => Promise<void> =
    useCallback(async (): Promise<void> => {
      if (user()) await getFetchRepositories(user()!)
    }, [getFetchRepositories])

  const handleChecksIfFieldIsEmpty = (): void => {
    if (!!user() === disabledButton) setDisabledButton(prevState => !prevState)
  }

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
        onChange={handleChecksIfFieldIsEmpty}
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
          disabled={disabledButton}
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

export default Example3
