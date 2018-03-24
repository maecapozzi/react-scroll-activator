# react-scroll-activator
`react-scroll-activator` watches for a scroll event inside of a container. It passes an `activatedState` to a render prop component.
It can be used on any container--not just the window.  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### The Problem
You want an element to "stick" to the top of the window when a user scrolls in a page. Or maybe you want to hide an element as a user scrolls. Basically, you want to trigger the behavior of a component as a user scrolls. 

### The Solution
The `react-scroll-activator` is a straightforward component that watches for a scroll event inside any container. If a user scrolls, (and a series of conditions are met), the `ScrollActivator` component sends an `activatedState` prop to a render prop component, triggering the render prop component's behavior. 

### TOC
  1.  Installation
  2.  Usage
  3.  FAQ
  4.  Inspiration
  5.  Alternatives
  6.  Contributors
  7. License
  
### Installation
### Usage

You can invoke the `ScrollActivator` component at almost any level fo the component hierarchy under a scrolling container. Wrap it around the child element.

```
<div className='any-class-name'>
  <ScrollActivator
    onScroll={this.handleScrollCallback}
    containerSelector='.any-class-name'
  >
    {activatedState => <StickyElement isSticky={activatedState} />}
  </ScrollActivator>
</div>
```
In this example, `ScrollActivator` is wrapped around a `StickyElement` which is the component that will stick to the top of the container as the user scrolls. The `ScrollActivator` will pass `activatedState` to the child component, which the child component can then use to activate certain behavior. In the case of this example, the `StickyElement` will stick to the top of the component. 

To actually make sure you are setting rules, add a `handleScrollCallback` function that resembles the one below to the class in which you are invoking `ScrollActivator`. You'll pass this to the `ScrollActivator` component `onScroll`. 

```
handleScrollCallback = (e, topOffset) => {
  this.containerSelector = document.querySelector('.any-class-name')
  return (
    e.target.scrollTop >
    this.containerSelector.getBoundingClientRect().top + topOffset
  )
}
```

To run the demos: `npm run start:demo`

### FAQ
### Inspiration
### Alternatives
### Contributors
### License
