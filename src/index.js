let md = require('markdown-it')('commonmark');
let mk = require('markdown-it-katex');

md.use(mk);

var text = `Dies
ist ein [Markdown](https://daringfireball.net/projects/markdown/)-Dokument 
mit der Möglichkeit, mathematische Ausdrücke einzugeben.

Die Vorschau folgt der CommonMark-Spezifikation. Alle mathematischen Ausdrücke nutzen die LaTeX-Syntax.

### Aufgabe 1
Hier ist eine Gleichung:

$$ ( 2 - x )^2 = 5 $$

### Aufgabe 2
Mathematische Ausdrücke wie $x=5$ können auch im Text stehen. Es geht aber auch komplizierter:

$$ \\int_{0}^{\\infty} dx\\ x^2 = 99 $$
`

let app = new Vue({
  el: '#app',
  delimiters: ['[', ']'],
  data: {
    input: text,
  },
  computed: {
    compiledMarkdown: function () {
      return md.render(this.input);
    }
  },
});
