import { ReactNode } from 'react'

export const mockedUseNavigate = jest.fn()
export const mockedUseParams = jest.fn()
export const mockedUseRoutes = jest.fn()
export const mockedUseLocation = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }: { children: ReactNode }) => children,
  Navigate: ({ children }: { children: ReactNode }) => children,
  Outlet: ({ children }: { children: ReactNode }) => children,
  useLocation: () => mockedUseLocation,
  useNavigate: () => mockedUseNavigate,
  useParams: mockedUseParams,
  useRoutes: mockedUseRoutes
}))
