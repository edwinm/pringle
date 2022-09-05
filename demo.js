async function main() {
    const {Prng} = await import( "./pringle.js" );

    const prng = new Prng(20);

    console.log('Return random number between 0 and 1');
    console.log(prng.rand());

    console.log('Return random number between 0 and 50');
    console.log(prng.rand(50));

    console.log('Return random number between 30 and 40');
    console.log(prng.rand(30, 40));

    console.log('Use the iterator to loop over 5 random numbers');
    for (const r of prng.iter(5)) {
        console.log(r);
    }

    console.log('Use the iterator to generate an array of 5 random integers between 0 and 10');

    const arr = Array.from(prng.iter(5), (r) => Math.floor(r * 10));

    console.log(arr);
}

main();