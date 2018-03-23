import React from "react"
import PropTypes from "prop-types"

const styleObj = {
  height: "5000px",
  overflow: "scroll",
  backgroundColor: "teal"
}

class Container extends React.Component {
  static propTypes = {
    containerSelector: PropTypes.string,
    className: PropTypes.string
  }

  render () {
    return <div className={this.props.className} style={styleObj} />
  }
}

export default Container
