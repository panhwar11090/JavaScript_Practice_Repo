const createTodo = async (todo)=>{
    let opt = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', opt)
    let response = await p.json()
    return response
}

const getTodo = async (id) =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async ()=>{
    let todo = {
        title: 'Huziafa',
        body: 'bhai',
        userId: 11090
    }
    let todor = await createTodo(todo)
    console.log(todor);
    // console.log(await createTodo(todo));
    console.log(await getTodo(1));
}

mainFunc();
