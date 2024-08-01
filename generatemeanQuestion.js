function generateQuestion() {
    // Generate five random numbers between 0 and 20
    let numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 21));
    }

    // Calculate the mean
    let sum = numbers.reduce((a, b) => a + b, 0);
    let mean = sum / numbers.length;

    // Display the question and answer
    document.getElementById("question").innerText = 
        "Calculate the mean of the following numbers: " + numbers.join(", ");
    document.getElementById("answer").innerText = 
        "Answer: " + mean.toFixed(2);
}
