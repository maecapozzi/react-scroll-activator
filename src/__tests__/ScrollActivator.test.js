import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import { mount } from 'enzyme'
import { ScrollActivator } from '../index'

describe('ScrollActivator', () => {
  const renderFunction = jest.fn().mockReturnValue(null)
  let scrollActivatorWithRenderFunction = mount(
    <ScrollActivator>{renderFunction}</ScrollActivator>
  )

  it('has the correct exports', () => {
    expect(ScrollActivator).toBeDefined()
  })

  it('calls the render prop function', () => {
    const wrapper = scrollActivatorWithRenderFunction
    expect(renderFunction.mock.calls.length).toBe(1)
    expect(wrapper.state('activatedState')).toBe('isNotActivated')
  })

  it('passes isNotActivated to the render prop function when no scroll event has been fired', () => {
    const activatedState = 'isNotActivated'
    const wrapper = scrollActivatorWithRenderFunction
    expect(renderFunction).toHaveBeenCalledWith(activatedState)
  })

  // TODO: 3/21/18 - Write a test that mocks a scroll event inside of a modal in enzyme.
  // Currently, this doesn't appear to be straightforward, and may not be possible.
  xit('passes isActivated to the render prop function when a scroll event has been fired', () => {})
})
