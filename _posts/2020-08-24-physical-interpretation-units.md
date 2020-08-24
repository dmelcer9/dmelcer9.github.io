---
title: "Physical interpretations of units"
tags: ["physics"]
---

When looking at the units of a quantity, the physical interpretation ranges from obvious to "What?"

For example, \\( \frac{meters}{second} \\) is pretty self-explanatory. 
How many meters do you travel in a second? 
This is our speed (or velocity if you want to be pedantic).

However, \\( \frac{meters}{second^2} \\) at first isn't intuitive. What does it mean to square a second?
This unit makes more sense when written as \\( \frac{\frac{meters}{second}}{second} \\), or change in velocity per second. Acceleration.

**Electron mobility**

This is written in units of \\( \frac{cm^2}{V \cdot s} \\), but mobility has nothing to do with area.
The unit makes sense as \\( \frac{cm}{s}/\frac{V}{cm} \\), or the [maximum speed of a charge carrier in a given electric field][1].

**Inductance**

The Henry is a weird unit. According to [Wikipedia][2], one of the things it is equal to is \\( \frac{V \cdot s}{A} \\).

It is possible to re-arrange the defining equation of an inductor \\( V = L\frac{dI}{dt} \\) to \\( L = V \frac{dt}{dI} \\). 
This means that the inductance of a component measures how long, at a given voltage, does it take for the component to allow a bit of current to pass through.
While the former equation may be more useful when actually doing calculations, 
I find the latter variant fairly useful for understanding what exactly \\( L \\) measures.

> I tried to see if there is a nice way to use the \\( \Omega \cdot s \\) version of a Henry by calculating
how much "resistance" an inductor provides in an \\( LR \\) circuit that has a voltage \\( V \\) applied to it.
>
> For example, at time 0, the inductor provides infinite resistance since there is some voltage across the inductor, but no current.
A long time in the future, the inductor provides near zero resistance, as there is a large current but no voltage. 
At all the times in between, the inductor's "resistance" would be the voltage across the inductor divided by the current flow.
Alternatively, it is possible to calculate the resistance of the whole circuit \\( \frac{V}{I(t)} \\) and subtract \\( R \\), as the resistor and inductor are in series.
> 
> Some curves with both a vertical and a horizontal asymptote [converge to a finite value][3], but the inductor's effective resistance does not. 
While the units do actually work out, the effective resistance of the inductor integrated over time is infinite.
 
If some property is measured in a non-intuitive unit, there's a good chance that the unit has a real meaning. 
Interpreting the unit can help with understanding the property itself.

[1]: https://en.wikipedia.org/wiki/Electron_mobility#:~:text=how%20quickly,an%20electric%20field
[2]: https://en.wikipedia.org/wiki/Henry_(unit)
[3]: https://www.wolframalpha.com/input/?i=integrate+1%2F%28sqrt%28x%29*%281%2Bx%5E2%29%29+from+0+to+infinity



