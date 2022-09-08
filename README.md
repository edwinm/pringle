# pringle

>Fast pseudorandom number generator

JavaScript adaptation of the pseudorandom number generator
from the 2008 research paper
[Evolving Sub-Grid Turbulence for Smoke Animation [PDF]](https://www.cs.ubc.ca/~rbridson/docs/schechter-sca08-turbulence.pdf)
by H. Schechter and R. Bridson of the The University of British Columbia, Canada.
which in turn uses the research paper [Wavelet Noise [PDF]](https://graphics.pixar.com/library/WaveletNoise/paper.pdf) by Robert L. Cook Tony DeRose
of Pixar Animation Studios for the PRNG.

This algorithm is small, fast and in most cases random enough.

## PRNG

A PRNG (pseudorandom number generator) always generates the same sequence
of random numbers. You can change the sequence by supplying a different seed.
This is very useful if you always want the same sequence of random numbers.

## Install

To install, type in the console:

```shell
npm install pringle
```

## Import

Preferred: load pringle as a JavaScript module
using a bundler like webpack or Rollup:

```javascript
import {Prng} from "pringle";
```

Load pringle dynamically as a JavaScript module
(no bundler needed, like in [demo.js](demo.js)):

```javascript
const {Prng} = await import( "./pringle.js" );
```

## API

### `prng = new Prng(seed);`

Initialise Prng with a seed (any number).

### `const r = prng.rand();`

Returns a floating point number 0 and 1.

This is including 0, excluding 1, so `prng.rand()` can return 0, but will never return 1.

### `const r = prng.rand(max);`

Returns a floating point number between 0 and max.

### `const r = prng.rand(min, max);`

Returns a floating point number between min and max.

### `const i = prng;`

`prng` can be used as an endless iterator of random numbers.

```javascript
let count = 5;
for (const r of prng) {
    doSomething(r);
    if (count-- == 0) {
        break;
    }
}
```

### `const i = prng.iter(count);`

Returns an iterable returning `count` random numbers between 0 and 1.

You can use the iterable in a `for` loop like this:

```javascript
for (const r of prng.iter(5)) {
    doSomething(r);
}
```

Another example of using the iterator is
generating an array of 5 random integers between 0 and 10:

```javascript
const arr = Array.from(prng.iter(5), (r) => Math.floor(r * 10));
```

### `const r = prng.prng();`

Returns the raw value of the generator, a 32 bit signed integer
(between -2,147,483,648 and 2,147,483,647, inclusive).

Normally, you use `prng.rand()` instead of this function.

## Demo

In the file [demo.js](demo.js), you can see examples of using the API.

You can run it in the console by typing:

```shell
npm run demo
```

## Naming

Pringle is named after the American actress Aileen Pringle (1895-1989).
It's unrelated to some brand of potato-based crisps.

## License

Copyright 2022 [Edwin Martin](https://bitstorm.org/) and released under the [MIT license](LICENSE).
