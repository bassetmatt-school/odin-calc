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
        let res = state.operator(state.number1, state.number2)
        state.number1 = res
        state.operator = null
        state.number2 = null
        update_display()
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
    state.operator = txt_to_op[op]
    update_display()
}

document.querySelectorAll(".nb-btn").forEach(btn => {
    btn.addEventListener("click", _evt => {
        let nb = btn.id.slice(7)
        process_nb(nb)
    })
})

document.querySelectorAll(".op-btn").forEach(btn => {
    btn.addEventListener("click", _evt => {
        let op = btn.id.slice(3)
        process_op(op)
    })
})

document.querySelector("#op-equal").addEventListener("click", _evt => {
    operate()
})
