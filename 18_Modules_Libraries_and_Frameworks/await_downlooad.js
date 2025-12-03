try {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok)
        throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();
    console.log("Todo item:", data);
}
catch (err) {
    console.error(err);
}