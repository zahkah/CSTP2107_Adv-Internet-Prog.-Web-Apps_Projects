'use client'

import { createTodoAction } from "../_actions";

const NewTodoForm = () => {

    const createAction = async (formData: FormData) => {
        // Get the data from the form
        const title = formData.get('title');
       
        if (!title || typeof title !== 'string') {
            return;
        }


        // Call Server action
        // Which further calls an API
        // Which furthers calls the PRisma --> Database 
        await createTodoAction(title);
      
   
    }

    return (
        <form className="flex" action={createAction}>
            <input id="title" name="title" type="text" placeholder="Enter the task title here" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}

export default NewTodoForm;