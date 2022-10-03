import './styles.css'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm'

const deck = new Reveal({
  width: 1920,
  height: 1080,
  plugins: [Markdown]
})

deck.initialize()
