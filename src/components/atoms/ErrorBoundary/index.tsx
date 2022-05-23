import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state: { hasError: boolean }
  constructor(props: object) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // componentDidCatch(error: any, errorInfo: any) {
  //  console.log(error, errorInfo)
  // }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
