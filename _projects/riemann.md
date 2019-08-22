---
title: Riemann Zeta Function GPU Fraction Search
display:
  type: image
  image: "images/zeta.png"
  source: Wikipedia
  sourceurl: "https://en.wikipedia.org/wiki/Riemann_zeta_function"
buttons:
 - class: btn-primary
   link: "https://github.com/dmelcer9/CUDAFindGCF"
   text: View on GitHub
order: 1
---

The Riemann Zeta function is an accurate predictor of the number of primes less than a given value. The inputs of the Zeta function that cause the function to equal zero have special mathematical properties.

Under the mentorship of David Biersach, I wrote a program that searched for a pattern in the smallest 100 known inputs with this property using their continued fraction representations. I used the CUDA framework to accelerate the computation by performing calculations hundreds of times in parallel on a consumer graphics card.

This research was conducted as part of the 2016 High School Research Program for Brookhaven National Laboratory.