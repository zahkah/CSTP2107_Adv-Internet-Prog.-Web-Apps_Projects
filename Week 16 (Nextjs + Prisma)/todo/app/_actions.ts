'use server';

import { createToDo, getTodo } from "../lib/todo";

export async function createTodoAction(title: string) {
    console.log(title, 'title');
    // Calls the API from database
    await createToDo(title);
}
