import React from 'react'
import PropTypes from 'prop-types'
import { ScrollActivator } from '../../src/index'
import StickyElement from './StickyElement'

const styleObj = {
  height: '500px',
  overflowY: 'auto',
  backgroundColor: 'blue'
}

class Container extends React.Component {
  handleScrollCallback = e => {
    this.containerSelector = document.querySelector('.any-class-name')
    return (
      e.target.scrollTop >
      this.containerSelector.getBoundingClientRect().top + 20
    )
  }

  render () {
    return (
      <div style={styleObj} className='any-class-name'>
        <ScrollActivator
          onScroll={this.handleScrollCallback}
          containerSelector='.any-class-name'
        >
          {activatedState => <StickyElement isSticky={activatedState} />}
        </ScrollActivator>
      </div>
    )
  }
}

export default Container
