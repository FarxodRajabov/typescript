import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";


interface User {
    id: number;
    title: string;
    completed: boolean;
}


axios.get(url).then(res => {
    const user = res.data as User
    const id = user.id
    const title = user.title
    const completed = user.completed

    console.log(`
    My id: ${id}    
    My Title: ${title}    
    My Completed: ${completed}    
`);
})
