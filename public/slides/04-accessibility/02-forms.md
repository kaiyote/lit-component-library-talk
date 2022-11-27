## Forms

You can even make a component interact with a form like a native element using `attachInternals`.

![HTMLElement.attachInternals support table](/slides/04-accessibility/attach-internals-support.png)

The extremely TL;DR;
<ul>
<li class="fragment"><code>this.internals = this.attachInternals()</code> in the constructor of the element</li>
<li class="fragment"><code>this.internals.setFormValue</code> whenever the internal state/value of your component changes</li>
<li class="fragment">stick it in an html form, give it a name, ???, profit</li>
<li class="fragment">
  In safari, its a little more challenging:
  <ul>
  <li>Find the nearest form to your element: <code>this.closest('form')</code></li>
  <li>Attach a <code>formdata</code> listener</li>
  <li>Add your element's value to the form data on that event</li>
  </ul>
</li>
</ul>

<p class="fragment">
If you're feeling particularly clever, you might even write a base class that extends from LitElement that handles the whole <code>attachInternals</code>, etc, whenever you set a <code>value</code> property.
</p>
