const add = function (a, b) { return a + b }
const sub = function (a, b) { return a - b }
const mul = function (a, b) { return a * b }
const div = function (a, b) { return a / b }
const mod = function (a, b) { return a % b }

let state = {
    number1: null, // Float
    number2: null, // Float
    operator: null, // Function
};

let operate = function (st) {
    st.operator(st.number1, st.number2)
}
