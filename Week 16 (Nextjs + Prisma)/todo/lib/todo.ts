// OUR APIS HERE!
import prisma from './prisma';

export async function createToDo(title: string) {
    try {
        let todo = await prisma.todo.create({ data: { title }});
        return { todo };
    } catch (error) {
        return { error };
    }
}

export async function getTodo() {
    try {
        const todos = await prisma.todo.findMany();
        console.log(todos, 'todos')
        return { todos };
    } catch (error) {
        return { error };
    }
}