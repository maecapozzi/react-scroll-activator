import React from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"

class ScrollActivator extends React.Component {
  static propTypes = {
    onScroll: PropTypes.func,
    children: PropTypes.func.isRequired,
    containerSelector: PropTypes.node
  }

  state = { activatedState: "isNotActivated" }

  componentDidMount () {
    this.containerSelector = document.querySelector(
      this.props.containerSelector
    )

    this.containerSelector &&
      this.containerSelector.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount () {
    this.containerSelector &&
      this.containerSelector.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    console.log("hit")
    this.setState({
      activatedState: this.props.onScroll(e) ? "isActivated" : "isNotActivated"
    })
  }

  render () {
    return this.props.children(this.state.activatedState)
  }
}

export default ScrollActivator
