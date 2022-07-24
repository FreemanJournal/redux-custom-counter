import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement,setCustom } from "../../redux/state/counter/counter.slice"
export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const customRef = useRef();

    return (
        <>
            <div className="card w-6/12 mx-auto mt-36">
                <article className="block p-6 text-center shadow-xl bg-gray-50 rounded-xl">
                    <h5 className="text-3xl font-bold text-emerald-500">Redux Counter</h5>


                    <div className="mt-4 text-gray-900">
                        <h6>
                            <span className="inline text-5xl font-bold">{count}</span>
                        </h6>

                    </div>



                    <button

                        className="inline-block px-8 py-3 mt-8 text-sm font-medium text-white transition bg-emerald-500 rounded hover:bg-emerald-400 hover:shadow-xl active:bg-emerald-500 focus:outline-none focus:ring-0"
                        onClick={() => dispatch(increment())}

                    >
                        Increase
                    </button>
                    <button
                        className="inline-block px-8 py-3 mt-8 text-sm font-medium ml-3 text-white transition bg-blue-600 rounded hover:bg-blue-700 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring-0"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrease
                    </button>
                </article>


                <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                   

                    <div className="flex items-center justify-center pb-6 mx-auto">
                        <form>
                            <div className="flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-0 focus-within:border-blue-400 focus-within:ring-blue-300">
                                <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent focus:ring-0" type="number" name="email" placeholder="Enter a number" aria-label="Enter your email" ref={customRef}/>

                                    <button type="button" className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none" onClick={()=>dispatch(setCustom(customRef.current.value))}>Set Number</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        </>
    )
}
