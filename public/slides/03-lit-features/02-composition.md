## Composition in Lit

This works like every other framework.

Define a child component, render it in the parents template. Do all the normal things with it.

Lit also defines some "directives" that can help w/ repetition/render performance/etc.

- `repeat` - render a template for each element of an iterable, with optional keying
- `choose` - its a switch statement, but as a function
- `when` - its an if statement, but as a function
- `ifDefined` - only render this attribute at all if the value of the argument is defined

There are also `ref`'s and memoization available.

Notes:
- `repeat(listOfItems, () => keyFun, () => html``)`
- `choose(something, [['array', of], ['tuples', and], ['render', functions]], () => defaultCase)`
- `when(booleanExpression, () => trueFun, () => optionalFalseFun)`
- `attr=${ifDefined(prop)}`
