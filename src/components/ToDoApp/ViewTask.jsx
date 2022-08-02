import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHandler } from './deleteHandler';
import { editHandler } from './editHandler';

export default function ViewTask() {
    const tasks = useSelector((state) => state.todo.tasks)
    const dispatch = useDispatch();

    return (

        <section className="bg-white dark:bg-gray-900 max-w-4xl mx-auto overflow-y-scroll h-96 rounded-b-lg">
            <div className="container px-6 py-12 mx-auto space-y-2">
                {
                    tasks?.map((item, i) => (
                        <div className="px-8 py-4 bg-gray-100 rounded-lg dark:bg-gray-800" key={i}>
                            <button className="flex items-center justify-between w-full">
                                <h1 className="font-semibold text-gray-700 dark:text-white">{item}</h1>

                                <div className="space-x-2">
                                    <button

                                        className="inline-block px-8 py-3  text-sm font-medium text-white transition bg-emerald-500 rounded hover:bg-emerald-400 hover:shadow-xl active:bg-emerald-500 focus:outline-none focus:ring-0"
                                        onClick={() => editHandler(i,item)}

                                    >
                                        Edit
                                    </button>
                                    <button

                                        className="inline-block px-8 py-3  text-sm font-medium text-white transition bg-emerald-500 rounded hover:bg-emerald-400 hover:shadow-xl active:bg-emerald-500 focus:outline-none focus:ring-0"
                                        onClick={() => deleteHandler(i)}

                                    >
                                        Delete
                                    </button>
                                </div>
                            </button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
