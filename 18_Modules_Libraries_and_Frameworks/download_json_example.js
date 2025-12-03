fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        if (!response.ok)
            throw new Error(`HTTP error: ${response.status}`);
        return response.json();
    })
    .then(data => console.log("Todo item:", data))
    .catch(err => console.error(err))