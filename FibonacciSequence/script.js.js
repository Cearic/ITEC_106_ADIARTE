function fibonacci(n) {
    let fib_series = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fib_series.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return fib_series;
}


function getNumTerms() {
    while (true) {
        let num_terms = parseInt(prompt("Enter the number of terms for the Fibonacci series (less than 100):"));
        if (Number.isNaN(num_terms) || num_terms < 1 || num_terms >= 100) {
            alert("Please enter a positive integer less than 100.");
            continue;
        }
        return num_terms;
    }
}


function main() {
    let num_terms = getNumTerms();
    document.write("<h3>Fibonacci Series:</h3>");
    document.write(fibonacci(num_terms).join(", "));
}


main();