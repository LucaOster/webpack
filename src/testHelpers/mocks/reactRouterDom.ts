import { ReactNode } from 'react'

export const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
  Navigate: ({ children }: { children: ReactNode }) => children,
  Link: ({ children }: { children: ReactNode }) => children
}))
