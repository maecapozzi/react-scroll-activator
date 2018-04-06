# react-scroll-activator
`react-scroll-activator` watches for a scroll event inside of a container or on the window. When certain user-defined rules are met, it passes an `activatedState` prop to a render prop component, triggering whatever behavior the developer chooses on the child.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CircleCI](https://circleci.com/gh/maecapozzi/react-scroll-activator/tree/master.svg?style=svg)](https://circleci.com/gh/maecapozzi/react-scroll-activator/tree/master)

### The Problem
You want an element to "stick" to the top of the window when a user scrolls in a page. Or maybe you want to hide an element as a user scrolls. Basically, you want to trigger the behavior of a component as a user scrolls. 

### The Solution
`react-scroll-activator` is a straightforward React component that watches for a scroll event inside any container or on the window. If a user scrolls, (and a series of conditions are met), the `ScrollActivator` component sends an `activatedState` prop to a render prop component, triggering the render prop component's behavior. 

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)
- [Inspiration](#inspiration)
- [Alternatives](#alternatives)
- [Contributors](#contributors)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
  
### Installation

`npm install react-scroll-activator`
### Usage

• [Basic](https://jsfiddle.net/maecapozzi/2ys8nnz1/11/)

You can either use the `ScrollActivator` component on the window, or on any container that scrolls. 

#### On the window
```jsx
class StickyElement extends React.Component {
  shouldComponentBeSticky = () => {
    return window.scrollY > 120
  }

  isSticky = activatedState => {
    if (activatedState === 'isActivated') {
      return { position: 'fixed' }
    } else {
      return { position: 'relative' }
    }
  }

  render () {
    return (
      <ScrollActivator onScroll={this.shouldComponentBeSticky}>
        {activatedState => (
          <div style={this.isSticky(activatedState)}>
            <h1>Hi</h1>
          </div>
        )}
      </ScrollActivator>
    }
  )
}

```

### In a modal

Let's say the modal's classname is `.any-class-name`:

```jsx
class StickyElement extends React.Component {
  handleScrollCallback = (e, topOffset) => {
    this.containerSelector = document.querySelector('.any-class-name')
    return (
      e.target.scrollTop >
        this.containerSelector.getBoundingClientRect().top + topOffset
    )
  }

  render () {
    return (
      <div className='any-class-name'>
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

```
In this example, `ScrollActivator` is wrapped around a `StickyElement` which is the component that will stick to the top of the container as the user scrolls. The `ScrollActivator` will pass `activatedState` to the child component, which the child component can then use to activate certain behavior. In the case of this example, the `StickyElement` will stick to the top of the component. 

To actually make sure you are setting rules, add a `handleScrollCallback` function that resembles the one below to the class in which you are invoking `ScrollActivator`. You'll pass this to the `ScrollActivator` component `onScroll`. 

### FAQ
### Inspiration
I built this because I needed to make a banner stick to the top of a container, but I didn't have access to the window. 
### Alternatives
* [react-sticky](https://github.com/captivationsoftware/react-sticky)
* [react-stickynode](https://github.com/yahoo/react-stickynode)
### Contributors
* Mae Capozzi
### License
MIT
