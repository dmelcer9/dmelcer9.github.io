---
title: Invertible Programming Language
header: >
  This project was made in collaboration with [Josh Goldman](https://github.com/GoldmanJ) for
  [Building Extensible Systems ("Hack your own language")](http://felleisen.org/matthias/4620-s18/index.html).
display: 
  type: code
  language: racket
  code: |
    > (define f->c
        (λ-auto-invertible (x)
        ((muln 5/9)
        ((subn 32) x))))
    > (f->c 32)
    0
    > (f->c -40)
    -40
    > (define c->f (invert f->c))
    > (c->f 0)
    32
    > (c->f -40)
    -40
buttons:
 - class: btn-primary
   link: https://github.com/Inverse-Lang/Inverse-Lang
   text: View on GitHub
order: 3
---

This is a Racket-based programming language that is capable of analyzing simple functions and automatically creating the inverse of that function such that applying the inverse of a one-argument function to the result of the "normal" function results in the original argument given.
