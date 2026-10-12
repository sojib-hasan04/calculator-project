const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const result = document.getElementById("result");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");

addBtn.addEventListener("click", function() {

    const sum = Number (num1.value) + Number(num2.value);
    result.textContent = sum;

});
subBtn.addEventListener("click", function() {
    const diff = Number(num1.value) - Number(num2.value);
    result.textContent = diff;
});
mulBtn.addEventListener("click", function() {
    const chiff = Number(num1.value) * Number(num2.value);
    result.textContent = chiff;
});

    divBtn.addEventListener("click", function() {
        if (Number(num2.value) === 0) {
            result.textContent = "0 diye bhag kora jay na";
        } else {
            const quotient = Number(num1.value) / Number(num2.value);
            result.textContent = quotient.toFixed(2);
        }
    });
