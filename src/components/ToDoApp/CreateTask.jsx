import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { add } from "../../redux/state/todo/todo.slice"
export default function CreateTask() {
    const taskRef = useRef();
    const dispatch = useDispatch();
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-t-lg shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">To Do App</h2>

            <form>
                <div className="grid grid-cols-1 gap-6 mt-4 ">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="username">Write the task</label>
                        <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring-0" ref={taskRef} />
                    </div>



                    <div className="flex justify-end mt-6">
                        <button type='button' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={() => dispatch(add(taskRef.current.value))}>Save</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
