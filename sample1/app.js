/* eek... this took about 30 min but I was kinda into it */
main();

function main() {
    const str = "Let's have some fun."
    const words = str.split(' ');
    const translated = words.map((word) => {
        const w = word.split('');
        return w.reduce((acc, curr) => {
            acc = acc + translate(curr);
            return acc;
        });

    });
    return translated.join(' ');
}

function translate(key) {
    const _key = key.toUpperCase();
    const letterMatrix = {
        'A': 4,
        'E': 3,
        'I': 1,
        'O': 0,
        'S': 5,
        'T': 7,
        'D': 5 /* Why are there 2 number 5's*/
    };
    return letterMatrix[_key] === undefined ? key : letterMatrix[_key];
}