function sumOfXn() {
    let x = +document.getElementById("x").value;
    let n = +document.getElementById("n").value;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    document.getElementById("footer2").innerHTML = sum;
}


