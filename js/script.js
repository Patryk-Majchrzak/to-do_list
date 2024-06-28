{
    const tasks = [];
    const form = document.querySelector(".js-form");
    const newTaskInput = document.querySelector(".js-input");
    const newTask = newTaskInput.value.trim();

    const welcome = () => console.log("Hello there!");

    const init = () => {
        welcome();
    };

    init();
};