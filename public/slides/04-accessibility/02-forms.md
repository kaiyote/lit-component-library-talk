## Forms

You can even make a component interact with a form like a native element using `attachInternals`.

![HTMLElement.attachInternals support table](/slides/04-accessibility/attach-internals-support.png)

<ul>
<li class="fragment"><code>this.internals = this.attachInternals()</code> in the constructor of the element</li>
<li class="fragment"><code>this.internals.setFormValue</code> whenever the internal state/value of your component changes</li>
<li class="fragment">stick it in an html form, give it a name, ???, profit</li>
</ul>

Notes:
- in every browser except safari its pretty easy
- you attachInternals in the constructor and store a reference to your new internals
- then when the value of your component changes, just call internals.setFormValue with that value and you're good to go
- internals also has methods to update form validity
- in safari, you'll need to locate the closest form when your element is connected and then add an eventListener for `formData` and set the value of your element in the form data on that event
- it is entirely possible to write a base class that handles all of this for you, and then all you need to do is implement it and set `this.value` correctly for any future component that needs to interact with a form
