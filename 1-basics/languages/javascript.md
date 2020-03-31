# JavaScript

```js
let x = '5'
x++ // coerced to the number 5
x // 6

// ++ means:
function plusPlus(original_x) {
    var original_x_coerced = Number(original_x)
    x = original_x_coerced + 1

    return original_x_coerced
}

var x = '5'
plusPlus(x) // 5
x // 6
```

Three pillers:
- Types
    - Primitive Types
    - Abstract Operations
    - Coercion
    - Equality
    - TypeScript, Flow, etc.
- Scope
    - Nested Scope
    - Hoisting
    - Closure
    - Modules
- Objects (Oriented)
    - `this`
    - `class {}`
    - Prototypes
    - OO vs. OLOO

## Types

> In JavaScript, everything is an object.

That is false according to the [spec](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-ecmascript-language-types).

The primitive types, according to the spec, are:
- `undefined`
- `null`
- Boolean
- String
- Symbol
- Number
- Object

What about these?
- undeclared?
- null? (quirky)
- functions? (subtype of object type)
- arrays? (subtype of object type)
- bigint?

In JavaScript, variables don't have types: values do.

`typeof` tells us the type of _value_ a variable contains. It always returns a
string. It is essentially an enum.

```js
typeof {} "object"
typeof [] // "object"
Array.isArray([]) //  true
typeof function() {} // "function"
typeof null // "object"
typeof 42n // "bigint"
typeof BigInt(42) // "bigint"
```

### `undefined` vs undeclared vs uninitialized (TDZ)

```js
typeof doesntExist //  "undefined"
```

`typeof` is the only function that can operate on an undeclared variable and
not throw an error.

TDZ stands for temporal dead zone.

### Special Values

`NaN` represents an invalid number. `NaN` is not equal to itself. It is the
only value that does not have the identity property (it's not equal to itself.)

`isNaN` coerces values into numbers before it checks for `NaN`.

```js
isNan('what do you know!') // true  OOPS
Number.isNan('what do you know!') // false  YAS

const someValue = NaN

const isNan = v => v !== v
```

The type of `NaN` is a number: an _invalid_ number.

How about negative zero?
```js
const x = -0
x === -0 // true

x.toString() // "0"  OOPS
x === 0 // true  OOPS
x > 0 // false
x < 0 // false

Object.is(x, -0) // true  YAS
Object.is(x, 0) // false  YAS

1 / 0 // Infinity
1 / -0 // -Infinity
```

`Object.is()` can be thought of as a quadruple equals operator.

Why negative zero? You could use it to determine to different positions for
the same value. Say a game has a car moving towards the left, and then it
stops. You may want to keep the car facing left, rather than right, so you
could use `-0` to differentiate between facing left and facing right when it
has stopped.

Or say you're tracking stocks, and you want to show if it has been raising or
falling. `-0` could indicate that it hasn't changed, but it's trending down.
`0` could indicate that it hasn't changed, but it's trending up.

```js
function sign(v) {
    return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

sign(-3) // -1
sign(3) // 1
sign(-0) // -1
sign(0) // 1
```

### Fundamental Objects

Use `new`:
- Object
- Array
- Function
- Date
- RegExp
- Error

Don't use `new`:
- String()
- Number()
- Boolean()

## Closure

What is closure?

Closure comes from lambda calculus.

Closure is when a function is able to "remember" and access its lexical scope
even when the function executes in a different scope.

```js
function ask(question) {
    setTimeout(function waitASec() {
        console.log(question)
    }, 100)
}

ask('What is closure?')
```

Academically, closure is for variables. For JavaScript, it's best to assume
the entire scope is being stored.

Closure is not "snapshotting" the values of variables. It's storing the
variables themselves.

```js
let teacher = 'Kyle'

const myTeacher = function() {
    console.log(teacher)
}

teacher = 'Suzy'

myTeacher() // Suzy
```

The `myTeacher` function doesn't store the _value_ of `teacher`. If it did,
then `Kyle` would be logged out. Instead, it stores the variable reference
itself, and so we get the live value of the variable.

```js
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(`i: ${i}`)
    }, i * 1000);
}
```

versus:

```js
for (var i = 1; i <= 3; i++) {
    let j = i

    setTimeout(function() {
        console.log(`j: ${j}`)
    }, j * 1000)
}
```

even better:
```js
for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(`i: ${i}`)
    }, i * 1000)
}
```

If you tried to use a `const` instead of a `let`, you'd get an error due to
`++`. You can't modify a `const`.

Closure is the preservation of the linkage to a _variable_, not the capturing of
the _value_.

### Coercion

Algorithms within JavaScript are inherently recursive. If a value needs to be
coerced to a primitive, and it doesn't get a primitive, it will try again.

These aren't necessarily real functions, but concepts.

#### ToPrimitive(hint)

If the `hint` is "number":
- `valueOf()`
- `toString()`

If the `hint` is "string":
- `toString()`
- `valueOf()`

#### ToString

This doesn't work for `-0`. It'll return `0`.

`ToString(object) > ToPrimitive(string) > toString() | valueOf()`

You can change string tag of an object with a symbol. It can also be useful to
override the `toString` method on an object and have it return a
`JSON.stringiy` version of the object.

#### ToNumber

An empty string will be coerced to `0`, which is dumb. It should've been `NaN`.
`null` also becomes `0`.

`ToNumber(object) > ToPrimitive(number) > valueOf() | toString()`

#### ToBoolean

Essentially uses a lookup table to determine if a value is falsy or truthy.

Falsy values are:
- `""`
- `0`, `-0`
- `null`
- `NaN`
- `false`
- `undefined`

All else are truthy.

### Cases

You claim to avoid coercion

When using `+`, if either values are a string, it'll try string concatenation.

**Boxing** is the process whereby a primitive is coerced to its object type in
order for a method to be called on it.

### Module Pattern

The module pattern requires the concept of encapsulation. Encapsulation is a
way of hiding, or controlling the visibility of, data and behavior.

Modules **encapsulate** data and behavior (methods) together. The state (data)
of a module is held by its methods via closure.

Classic/revealing module pattern:
```js
const workshop = (function Module(teacher) {
    const publicAPI = { ask, }

    return publicAPI

    function ask(question) {
        console.log(teacher, question)
    }
})('Kyle')

workshop.ask("It's a module, right?")
```

This usage of closure is closing over variables that are designed to change
state over time. The whole purpose of a module is to track state over time. If
you build a module that doesn't have any state that changes, it's not a module.
It's an over-engineered namespace.

Module factory:
```js
function WorkshopModule(teacher) {
    const publicAPI = { ask, }

    return publicAPI

    function ask(question) {
        console.log(teacher, question)
    }
}

const workshop = WorkshopModule('Kyle')

workshop.ask("It's a module, right?")
```

- Some behavior(s)
- Some data that behavior operates on
- Encapsulate it into a data structure
- Hide what I don't need to show
- Expose only the minimal necessary API
- That's a module!

The module pattern is certainly the most prevalent and, potentially, the most
important of all code organization patterns.

## Philosophy of Coercion

Implicit != Magic
Implicit != Bad
Implicit: Abstracted

Hiding unnecessary details, re-focusing the reader and increasing clarity.

Useful: when the reader is focused on what's important.
Dangerous: when the reader can't tell what will happen.
Better: when the reader understands the code.

It is _irresponsible_ to knowingly avoid usage of a feature that can _improve
code readability_.

## Static Typing

Benefits:
- Catch type-related mistakes
- Communicate type intent
- Provide IDE feedback

Caveats:
- Inferencing is best-guess, not a guarantee
- Annotations are optional
- Any part of the application that isn't typed introduces uncertainty

> I'm being honest with you when I tell you that in my 20 plus years in coding
> never once, not once, has a bug been as a result of me accidentally assigning
> a number to a variable that used to hold a string.

It can tell us that certain operations would be invalid. For example, trying to
subtract a string from a number.

Pros:
- They make types more obvious in code
- Familiarity: they look like other language's type systems
- Extremely popular these days
- They're _very_ sophisticated and good at what they do

Cons:
- They use "non-JS-standard" syntax (or code comments)
- They require a build process which raises the barrier to entry
- Their sophistication can be intimidating to those without prior formal types experience
- They focus more on "static types" (variables, parameters, returns, properties, etc) than _value types_

Type-aware linting is the way, not necessarily TypeScript or Flow.

JavaScript has a (dynamic) type system, which uses various forms of coercion
for value type conversion, including equality comparisons.

However, the prevailing response seems to be: avoid as much of this system as
possible, and use `===` to "protect" from needing to worry about types.

Part of the problem with _avoidance_ of whole swaths of JS, like pretending
`===` saves you from needing to know types, is that it tends to systematically
perpetuate bugs.



