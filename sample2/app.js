main();

function main() {
    const str = 'hhhhhqqlllllllhhhppp';
    const chars = str.split('');

    //ack, this is the wrong way
    // chars.map((c) => {
    //     const h = histogram[c.toLowerCase()];
    //     if (h === undefined) {
    //         histogram[c.toLowerCase()] = 1;
    //     } else {
    //         let temp = histogram[c.toLowerCase()];
    //         const newValue = temp++;
    //         histogram[c.toLowerCase()] = newValue
    //     }

    // });
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