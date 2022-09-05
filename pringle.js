/**
 Pringle 1.0.0
 @copyright 2022 Edwin Martin
 @license MIT
 */

export class Prng {
    constructor(seed=0) {
        this.seed = seed;
    }

    prng() {
        this.seed ^= 2747636419;
        this.seed *= 2654435769;
        this.seed &= 0xFFFFFFFF;
        this.seed ^= this.seed >> 16;
        this.seed *= 2654435769;
        this.seed &= 0xFFFFFFFF;
        this.seed ^= this.seed >> 16;
        this.seed *= 2654435769;
        this.seed &= 0xFFFFFFFF;

        return this.seed;
    }

    * iter(count) {
        while (count-- > 0) {
            yield this.rand();
        }
    }

    rand(min, max) {
        if (min === undefined) {
            max = 1;
            min = 0;
        } else if (max === undefined) {
            max = min;
            min = 0;
        }

        return ((this.prng() + 0x80000000) / 0x100000000) * (max - min) + min;
    }
}


