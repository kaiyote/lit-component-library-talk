## Reactive State

`@property` - Exactly what it sounds like. Identical to `props` in React, Angular, Vue
  - sets up watchers for both attribute and object property versions of the `@property`
    - `<my-tag prop=""></my-tag>` or `myTag.prop = whatever`
  - has conversion support for the basic JS types (String, Boolean, Number, Object, Array) for things passed in as attributes
  - you can write your own custom converter if you're feeling fancy

Note:
- You just decorate each class property that you want exposed as a property with this decorator.
- It generates custom getter/setters that handle all the of the change detection to trigger rerenders, etc
- If necessary, you can write custom converters for converting from attributes on the element tag to the type/shape you need them to be
  - TBH, these shouldn't be necessary very often
- State works just like property does, except it doesn't expose anything to the outside
