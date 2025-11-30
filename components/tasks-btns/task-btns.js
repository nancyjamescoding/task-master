const openTaskModal = () =>{
    modal = document.getElementById("add-task-modal-id")
    modal.classList.remove("add-task-modal-off")
    modal.classList.add("add-task-modal-on")
}

const closeTaskModal = () =>{
    modal = document.getElementById("add-task-modal-id")
    modal.classList.add("add-task-modal-off")
    modal.classList.remove("add-task-modal-on")
}

