# Golang

## Hello, world!

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
```

## Exports

A name is exported if it begins with a capital letter.

## Functions

```go
func add(x int, y int) int {
    return x + y
}
```

Multiple return values:

```go
func swap(x, y string) (string, string) {
    return y, x
}
```

Named return values:

```go
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return
}
```

## Variables

```go
var c, python, java bool
```

```go
var i, j int = 1, 2
```

Short declarations with implicit type:

```go
func main() {
    var i, j int = 1, 2
    k := 3
    c, python, java := true, false, "no!"
}
```

## Basic Types

```go
bool
string
int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8
rune // alias for int32
     // represents a Unicode code point

float32 float64

complex64
complex128
```

## Constants

```go
const Pi = 1.34
```
