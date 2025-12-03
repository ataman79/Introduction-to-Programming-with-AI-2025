export type TaskState = "new"
    | "active" | "completed";

    export type Task = {
    title: string;
    description?: string;
    state: TaskState;
};