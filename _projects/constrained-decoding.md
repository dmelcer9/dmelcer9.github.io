---
header: "**Daniel Melcer**, Nathan Fulton, Sanjay Krishna Gouda, Haifeng Qian"
title: Constrained Decoding for Code Language Models via Efficient Left and Right Quotienting of Context-Sensitive Grammars
buttons:
 - class: btn-primary
   link: "https://arxiv.org/pdf/2402.17988"
   text: arXiv <i class="fa fa-file-pdf-o"></i>

order: 10
---

(Abstract) Large Language Models are powerful tools for program synthesis and advanced auto-completion, but come with no guarantee that their output code is syntactically correct. This paper contributes an incremental parser that allows early rejection of syntactically incorrect code, as well as efficient detection of complete programs for fill-in-the-middle (FItM) tasks. We develop Earley-style parsers that operate over left and right quotients of arbitrary context-free grammars, and we extend our incremental parsing and quotient operations to several context-sensitive features present in the grammars of many common programming languages. The result of these contributions is an efficient, general, and well-grounded method for left and right quotient parsing. To validate our theoretical contributions -- and the practical effectiveness of certain design decisions -- we evaluate our method on the particularly difficult case of FItM completion for Python 3. Our results demonstrate that constrained generation can significantly reduce the incidence of syntax errors in recommended code.
