import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class ScrollActivator extends React.Component {
  static propTypes = {
    onScroll: PropTypes.func,
    children: PropTypes.func.isRequired,
    containerSelector: PropTypes.node
  }

  state = { activatedState: 'isNotActivated' }

  componentDidMount() {
    this.props.containerSelector
      ? this.setContainerSelector()
      : this.setContainerSelectorToWindow()

    this.containerSelector &&
      this.containerSelector.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    this.containerSelector &&
      this.containerSelector.removeEventListener('scroll', this.handleScroll)
  }

  setContainerSelector = () => {
    this.containerSelector = document.querySelector(
      this.props.containerSelector
    )
  }

  setContainerSelectorToWindow = () => {
    this.containerSelector = window
  }

  handleScroll = e => {
    this.setState({
      activatedState: this.props.onScroll(e) ? 'isActivated' : 'isNotActivated'
    })
  }

  render() {
    return this.props.children(this.state.activatedState)
  }
}

export default ScrollActivator
