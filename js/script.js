    const tasks = [];

    const render = () => {
        const tasksList = document.querySelector(".js-tasks");

        let newTasks = ""

        tasks.forEach((task) => {newTasks +=
                `<li>
                    <button></button>
                        ${task.content}
                    <button></button> 
                </li>`
        });

        tasksList.innerHTML = newTasks
    };

    const addNewTask = (newTask) => {
        tasks.push({
            content:newTask,
            done:false,
        });

        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskInput = document.querySelector(".js-input");
        const newTask = newTaskInput.value.trim();

        newTaskInput.focus();

        if (newTask === ""){
            newTaskInput.value="";
            return;
        };    

        addNewTask(newTask);
        newTaskInput.value="";
    };

    const listenFormSubmit = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("click", onFormSubmit);
    };

    const welcome = () => console.log("Hello there!");

    const init = () => {
        welcome();
        listenFormSubmit();
    };

    init();