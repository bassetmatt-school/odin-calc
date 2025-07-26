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
    update_display()
})

document.querySelector("#op-dot").addEventListener("click", _evt => {
    process_dot()
    update_display()
})
