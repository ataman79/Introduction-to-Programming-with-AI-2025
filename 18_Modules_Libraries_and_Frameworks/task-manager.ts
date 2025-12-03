import { Task, TaskState }
    from "./types";
let task: Task = {
    title: "Fix dev script",
    state: "new"
};

task.state = "active";
console.log(`Task "${task.title}" is now ${task.state}.`);
