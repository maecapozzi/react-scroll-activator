import React from "react"
import { render } from "react-dom"

import Container from "./src/Container"
import { ScrollActivator } from "../src/index"
import StickyElement from "./src/StickyElement"

if (module.hot) {
  module.hot.accept()
}

const styleObj = {
  height: "500px",
  overflowY: "auto",
  backgroundColor: "blue"
}

class DemoApp extends React.Component {
  handleScrollCallback = e => {
    console.log(e)
    this.containerSelector = document.querySelector(".any-class-name")
    return (
      e.target.scrollTop >
      this.containerSelector.getBoundingClientRect().top + 20
    )
  }

  render () {
    return (
      <div style={styleObj} className="any-class-name">
        <ScrollActivator
          onScroll={this.handleScrollCallback}
          containerSelector=".any-class-name"
        >
          {activatedState => <StickyElement isSticky={activatedState} />}
        </ScrollActivator>
      </div>
    )
  }
}

render(<DemoApp />, document.getElementById("demo-app"))
