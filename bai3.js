let factorial1 = 0

function factorial() {
    let m = +document.getElementById("m").value;
    factorial1 = 1;
    for (i = 1; i <= m; i++) {
        factorial1 *= i;
    }
    console.log(factorial1)

    document.getElementById("footer3").innerHTML = factorial1;
}
console.log(factorial1)


