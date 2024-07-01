{
    const welcome = () => console.log("Hello there!");   
   
    let tasks = [
        {
            content:"zrobić coś",
            done:false
        },
        {
            content:"zrobić coś innego",
            done:true,
        },
    ];

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };

    const toggleDone = (index) => {
        tasks[index].done=!tasks[index].done;
        render();
    };

    const listenListButtonsEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-toggleDoneButton");

        toggleDoneButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                toggleDone(index);
            })
        });

        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                removeTask(index);
            })
        });
    };

    const render = () => {
        const tasksList = document.querySelector(".js-tasks");

        let newTasks = ""

        tasks.forEach((task) => {newTasks +=
                `<li class="list__item">
                    <button class="list__button list__button--toggleDone js-toggleDoneButton"> 
                        ${task.done ? "✔" : ""} 
                    </button>
                        <span class=${task.done ? "list__item--done" : ""}>${task.content}</span>
                    <button class="list__button list__button--remove js-removeButton"> 
                        🗑 
                    </button> 
                </li>`
        });

        tasksList.innerHTML = newTasks; 

        listenListButtonsEvents();    
    };

    const addNewTask = (newTask) => {
        tasks = [
            ...tasks,
            {
                content: newTask,
                done: false,
            },
        ];

        render();
    };

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

        form.addEventListener("submit", onFormSubmit);
    };

    const init = () => {
        welcome();
        listenFormSubmit();
        render();
    };

    init();
};