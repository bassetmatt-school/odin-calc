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

document.querySelector("#btn-ac").addEventListener("click", _evt => {
    clear()
})

document.querySelector("#op-dot").addEventListener("click", _evt => {
    process_dot()
})

document.addEventListener("keydown", evt => {
    const keyName = evt.key
    if ("0123456789".includes(keyName)) {
        process_nb(keyName)
        return
    }
    switch (keyName) {
        case "+":
            process_op("add")
            break;
        case "-":
            process_op("sub")
            break;
        case "x":
        case "*":
            process_op("mul")
            break;
        case "/":
        case ":":
            process_op("div")
            break;
        case "%":
            process_op("mod")
            break;
        case ".":
        case ",":
            process_dot()
            break;
        case "Enter":
        case "=":
            operate()
            break;
        case "Escape":
            clear()
            break;
        default:
            break;
    }
})
