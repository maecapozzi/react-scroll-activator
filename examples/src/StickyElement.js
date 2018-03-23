import React from 'react'
import PropTypes from 'prop-types'

const header = {
  backgroundColor: 'red',
  height: '100px',
  width: '95%'
}

const fixedHeader = {
  backgroundColor: 'red',
  height: '100px',
  position: 'fixed',
  width: '95%'
}

const StickyElement = ({ isSticky }) => {
  if (isSticky === 'isActivated') {
    return (
      <div style={{ height: '5000px' }}>
        <div style={fixedHeader}>
          <h1
            style={{
              color: 'white'
            }}
          >
            I'm Sticky
          </h1>
        </div>
      </div>
    )
  } else {
    return (
      <div style={{ height: '5000px' }}>
        <div style={header}>
          <h1
            style={{
              marginTop: '200px',
              color: 'white'
            }}
          >
            I'm Not Sticky
          </h1>
        </div>
      </div>
    )
  }
}

StickyElement.propTypes = {
  isSticky: PropTypes.string
}

export default StickyElement
