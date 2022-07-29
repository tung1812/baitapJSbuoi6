function createDivElement() {
    for (let i = 0; i <= 10; i++) {
        if(i % 2 != 0) {
            const oddDiv = document.createElement("div");
            oddDiv.style.backgroundColor = 'blue';
            oddDiv.innerHTML = "Odd Div number" + " " + i;
            oddDiv.style.color = 'white';
            document.getElementById("footer4").appendChild(oddDiv);
        } else {
            const evenDiv = document.createElement("div");
            evenDiv.style.backgroundColor = 'red';
            evenDiv.innerHTML = "Even Div number" + " " + i;
            evenDiv.style.color = 'white';
            document.getElementById("footer4").appendChild(evenDiv);
        }
    }
}