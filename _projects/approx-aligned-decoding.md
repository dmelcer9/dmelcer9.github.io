---
header: "**Daniel Melcer**, Sujan Gonugondla, Pramuditha Perera, Haifeng Qian, Wen-Hao Chiang, Yanjun Wang, Nihal Jain, Pranav Garg, Xiaofei Ma, Anoop Deoras - [NeurIPS 2025](https://openreview.net/pdf?id=0mOBdNsI3L)"
title: Approximately Aligned Decoding
display:
buttons:
 - class: btn-primary
   link: "https://openreview.net/pdf?id=0mOBdNsI3L"
   text: NeurIPS 2025 <i class="fa fa-file-pdf-o"></i>
order: 12
---

(Abstract) It is common to reject undesired outputs of Large Language Models (LLMs); however, current methods to do so require an excessive amount of computation to re-sample after a rejection, or distort the distribution of outputs by constraining the output to highly improbable tokens. We present a method, Approximately Aligned Decoding (AprAD), to balance the distortion of the output distribution with computational efficiency, inspired by algorithms from the speculative decoding literature. AprAD allows for the generation of long sequences of text with difficult-to-satisfy constraints, while amplifying low probability outputs much less compared to existing methods. We show through a series of experiments that the task-specific performance of AprAD is comparable to methods that do not distort the output distribution, while being much more computationally efficient.