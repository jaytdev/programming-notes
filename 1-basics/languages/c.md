# C Language

## Hello, world!

```c
#include <stdio.h>

int main(int argc, char** argv) {
  puts("Hello, world!");

  return 0;
}
```

## Basics

Constants:
```c
// Constants are written in all-caps out of convention, not requirement
#define DAYS_IN_YEAR 365

enum days {SUN = 1, MON, TUE, WED, THU, FRI, SAT};
```

Import headers:
```c
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
```

File names between angle brackets are headers from the C standard library. For your own headers, use double quotes instead of angle brackets:
```c
#include "my_header.h"
```

Declare function signatures in advance in an `.h` file, or at the top of your `.c` file:
```c
void function_1();
int function_2(void);
```

You must declare a function prototype before `main()` when functions occur after your `main()` function:
```c
int add_two_ints(int a, int b): // function prototype
```

Your program's entry point is a function called `main` with an integer return type:
```c
int main(void) {
    // your program
}
```

```c
int main(int argc, char** argv) {
    printf("%d\n", 0);
}
```

## Types

```c
int x_int = 0; // usually 4 bytes
short x_short = 0; // usually 2 bytes

// chars are guaranteed to be 1 byte
char x_char = 0;
char y_char = 'y'; // char literals are quoted with ''

// long are often 4 to 8 bytes; long longs are guaranteed to be at least 8 bytes
long x_long = 0;
long long x_long_long = 0;

// floats are usually 32-bit floating-point numbers
float x_float = 0.0f; // 'f' denotes floating point literal

// doubles are usually 64-bit floating-point numbers
double x_double = 0.0; // real numbers without any suffix are doubles

// integer types may be unsigned (greater than or equal to zero)
unsigned short ux_short;
unsigned int ux_int;
unsigned long long ux_long_long;

// chars inside single quotes are integers in machine's character set
'0': // 48
'A'; // 65

// Arrays must be initialized with a concrete size
char my_char_array[20];
int my_int_array[20];

char my_array[20] = {0};
char my_array[] = {0}; // Equivalent to above
```