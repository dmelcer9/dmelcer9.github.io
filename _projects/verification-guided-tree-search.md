---
title: Verification-Guided Tree Search
header: "Alvaro Velasquez, **Daniel Melcer**- [AAMAS 2020](https://aamas2020.conference.auckland.ac.nz/) (Extended Abstract)"
display:
  type: image
  image: "images/vgts-fig1.png"
buttons:
 - class: btn-primary
   link: "http://www.ifaamas.org/Proceedings/aamas2020/pdfs/p2026.pdf"
   text: View paper <i class="fa fa-file-pdf-o"></i>
 - class: btn-outline-primary
   link: "https://dl.acm.org/doi/10.5555/3398761.3399063"
   text: "doi: 10.5555/3398761.3399063"
order: 7
---

(Abstract) Monte-Carlo Tree Search (MCTS) algorithms have been adopted by the artificial intelligence planning community for decades due to their ability to reason over long time horizons while providing guarantees on the convergence of the solution policy.
In recent years, such algorithms have been modernized through the integration of Convolutional Neural Networks (CNNs) as part of the state evaluation process.
However, both traditional and modern MCTS algorithms suffer from poor performance when the underlying reward signal of the environment is sparse.
In this paper, we propose a verification-guided tree search solution which incorporates a reward shaping function within modern MCTS implementations.
This function leverages the mathematical representation of the underlying objective by leveraging techniques from formal verification.
