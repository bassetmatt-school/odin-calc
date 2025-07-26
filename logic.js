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

let operate = function () {
    if (state.number1 != null && state.operator != null && state.number2 != null) {
        process_nb("")
        let res = state.operator(state.number1, state.number2)
        state.number1 = res
        state.operator = null
        state.number2 = null
        update_display()
        state.number1 = null
    }
}

let op_to_txt = function (operator) {
    switch (operator) {
        case add:
            return "+"
        case sub:
            return "-"
        case mul:
            return "x"
        case div:
            return "/"
        case mod:
            return "%"
        default:
            break;
    }
}

let txt_to_op = {
    "add": add,
    "sub": sub,
    "mul": mul,
    "div": div,
    "mod": mod,
    "div_eucl": null,
}

let update_display = function () {

    let disp = document.querySelector("#display")
    let text = ""
    if (state.number1 != null) {
        text += state.number1
        // TODO: Test if float
    }
    if (state.operator != null) {
        text += op_to_txt(state.operator)
    }
    if (state.number2 != null) {
        text += state.number2
    }
    disp.textContent = text
}

let process_nb = function (nb) {
    if (state.operator === null) {
        key = "number1"
    } else {
        key = "number2"
    }

    if (state[key] === null) {
        state[key] = parseFloat(nb)
    } else {
        state[key] = parseFloat(state[key] + nb)
    }

    update_display()
}


let process_op = function (op) {
    if (state.operator != null && state.number2 != null) {
        operate()
    }
    if (state.number1 === null) {
        state.number1 = parseFloat(document.querySelector("#display").textContent)
    }
    state.operator = txt_to_op[op]
    update_display()
}

let process_dot = function () {
    if (state.operator === null) {
        key = "number1"
    } else {
        key = "number2"
    }

    if (state[key] === null || state[key] === 0) {
        state[key] = "0."
    } else {
        state[key] += "."
    }
}

let clear = function () {
    state.number1 = 0
    state.number2 = null
    state.operator = null
}
