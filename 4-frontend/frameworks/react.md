# React

Plain React:
```js
const rootElement = document.getElementById('root')
const element = React.createElement('div', {
    children: 'Hello, world!',
    className: 'container',
})

ReactDOM.render(element, rootElement)
```

With JSX:
```jsx
const rootElement = document.getElementById('root')
const element = <div className="container">Hello, world!</div>

ReactDOM.render(element, rootElement)
```

Interpolation:
```jsx
const className = 'container'
const children = 'Hello, world!'
const element = <div className={className}>{children}</div>

// or
const element = <div className={className} children={children} />

// or
const props = {className, children}
const element = <div {...props} />
```

Fragments:
```jsx
const helloEl = React.createElement('span', null, 'Hello')
const worldEl = React.createElement('span', null, ', world!')
const element = React.createElement(React.Fragment, null, [helloEl, worldEl])

ReactDOM.render(element, document.getElementById('root'))

// or...
const element = <React.Fragment>
    <span>Hello</span>, <span>world!</span>
</React.Fragment>

// or...
const element = (
    <>
        <span>Hello</span>, <span>world!</span>
    </>
)
```

Simple component:
```jsx
const Message = props => <div className="message">{props.children}</div>

const element = (
    <div className="container">
        <Message>Hello, world!</Message>
        <Message children="Goodbye, world!" />
    </div>
)
```

Prop types:
```jsx
const SayHello = ({firstName, lastName}) => (
    <div>
        Hello, {firstName} {lastName}
    </div>
)

const PropTypes = {
    string(props, propName, componentName) {
        if (typeof props[propName] !== 'string') {
            return new Error(`Hey, the component ${componentName} needs the prop ${propName} to be a string.`)
        }
    },
}
SayHello.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
}
```

Using the `prop-types` package:
```jsx
SayHello.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}
```

Prop types are not applied in production for performance reasons. There is also a babel plugin to remove prop types from the production source code: `babel-plugin-transform-react-remove-prop-types`.