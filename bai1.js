function smallPosInt() {
    let n = 0;
    let sum = 0;
    do {
        n++;
        sum += n;
    }
    while (sum < 10000);
    let result = "The smallest positive interger for which 1 + 2 + 3 + ... + n < 1000 is:" + " " + n;
    document.getElementById("footer").innerHTML = result;
}