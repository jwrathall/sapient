main();

function main() {
    const str = 'hhhhhqqlllllllhhhppp';
    const chars = str.split('');
    let n = 1;
    const histogram = [];
    chars.forEach((element, i, arr) => {
        if (element != arr[i + 1]) {
            histogram.push(element + "" + n);
            n = 1;
        } else {
            n++;
        }
    });
    console.log(histogram.join(' '));
}
