{
    const tasks = [];
    const form = document.querySelector(".js-form");
    const newTaskInput = document.querySelector(".js-input");
    const tasksListContainer = document.querySelector(".js-tasks")
    const newTask = newTaskInput.value.trim();

    const render = () => {
        if (!tasks.length) {
            tasksListContainer.innerHTML = ""
        }
        else {
            const tasksList = tasks.forEach((task) => {
            `<ul>
                <li>
                    <button></button>
                    ${task.content} 
                    <button></button>
                </li>
            </ul>`
            });
        };
    };

    const welcome = () => console.log("Hello there!");

    const init = () => {
        welcome();
    };

    init();
};