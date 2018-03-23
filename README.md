# react-scroll-activator
`react-scroll-activator` watches for a scroll event inside of a container. It passes an `activatedState` to a render prop component.
It can be used on any container not just the window.  

### The Problem
It can be difficult to force an element to "stick" to the top of the window when a user scrolls in a page. It's even more difficult to create this behavior in a container like a modal, where you don't have access to the window. 

### The Solution
I created a component that would watch for a scroll event inside any container. If a user scrolls, (and a series of conditions are met), the `ScrollActivator` component will send an `activatedState` prop to a render prop component. 

```

```

To run the demos: `npm run start:demo`

## Documentation Structure

Badges
The problem
The solution
TOC
Installation
Usage
FAQ
Inspiration
Alternatives
Contributors
License
