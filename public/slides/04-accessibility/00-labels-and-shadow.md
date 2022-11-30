## Labels And The Shadow DOM

Id's are only unique within a specific shadow layer.

This means that you can repeat id's, so long as they are in different shadows. <!-- .element class="fragment" -->

<span class="fragment">

```html
<shadow-tag>
  <!-- shadow dom -->
    <span id="something">
  <!-- end shadow -->
</shadow-tag>
<shadow-tag>
  <!-- shadow dom -->
    <span id="something">
  <!-- end shadow -->
</shadow-tag>
```

</span>

This also means that labels must be in the same DOM level as the element they are tied to. <!-- .element class="fragment" -->

Notes:
- id's don't cross the shadow boundary. This means that if you need an id for an internal element in your component, feel free to call it whatever. It will not and cannot collide with ids somewhere else in the dom.
- however, this also means that things which use ids to link themselves together (like labels and their target element) must be in the same DOM.
- this also applies to any aria-* attributes that use ids as their values
