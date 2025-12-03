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

const toggleTasks = (element) => {
    const myTasksTab = document.getElementById("my-tasks-id");
    const aiSummaryTab = document.getElementById("ai-summary-id");
    const myTasksSect = document.getElementById("my-tasks-sect-id")
    const aiSummarySect = document.getElementById("ai-summary-sect-id")
    console.log(element)
    if (element.id === "my-tasks-id"){
        myTasksTab.classList.add("active");
        aiSummaryTab.classList.remove("active");
        myTasksSect.classList.add("my-tasks-sect")
        myTasksSect.classList.remove("inactive-sect")
        aiSummarySect.classList.add("inactive-sect")
        aiSummarySect.classList.remove("ai-summary-sect")
    }

    if (element.id === "ai-summary-id"){
        myTasksTab.classList.remove("active");
        aiSummaryTab.classList.add("active");
        myTasksSect.classList.remove("my-tasks-sect")
        myTasksSect.classList.add("inactive-sect")
        aiSummarySect.classList.remove("inactive-sect")
        aiSummarySect.classList.add("ai-summary-sect")
    }
}

// aiSummaryTab.addEventListener("click", () => {
//     aiSummaryTab.classList.add("active");
//     myTasksTab.classList.remove("active");

//     aiSummaryPage.classList.add("active");
//     myTasksPage.classList.remove("active");
// });
