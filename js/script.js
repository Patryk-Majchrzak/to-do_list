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
    let hideDone = false;
    

    const removeTask = (index) => {
        tasks = [
        ...tasks.slice(0, index),
        ...tasks.slice(index + 1),
        ];
        render();
    };

    const listenHideDoneButtonEvent = () => {
        const toggleHideDone = document.querySelector(".js-toggleHideDone");

        toggleHideDone.addEventListener("click", hideDoneTasks);
    };

    const hideDoneTasks = () => {
        let buttonText = document.querySelector(".js-toggleHideDoneButtonText")

        hideDone = !hideDone;
        buttonText.innerText = hideDone ? "Pokaż" : "Ukryj";
        console.log(hideDone);    
            
        render();
    }

    const toggleDone = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            {...tasks[index], done:!tasks[index].done},
            ...tasks.slice(index + 1),
        ];
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

    const renderTasks = () => {
        const tasksList = document.querySelector(".js-tasks");

        let newTasks = ""

        tasks.forEach((task) => {
            newTasks +=
                `<li class="list__item ${task.done && hideDone ? "list__item--hidden" : ""}">
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

    const render = () => {
        renderTasks();
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
        listenHideDoneButtonEvent();
        render();
    };

    init();
};