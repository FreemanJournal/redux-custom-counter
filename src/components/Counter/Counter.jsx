import React from 'react'

export default function Counter() {
    return (
        <>
            <div className="card w-6/12 mx-auto mt-36">
                <article className="block p-6 text-center shadow-xl bg-gray-50 rounded-xl">
                    <h5 className="text-3xl font-bold text-emerald-500">Redux Counter</h5>


                    <div className="mt-4 text-gray-900">
                        <h6>
                            <span className="inline text-5xl font-bold">00</span>
                        </h6>

                    </div>

                    

                    <button
                        className="inline-block px-8 py-3 mt-8 text-sm font-medium text-white transition bg-emerald-500 rounded hover:bg-emerald-400 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring"
                        
                    >
                        Increase
                    </button>
                    <button
                        className="inline-block px-8 py-3 mt-8 text-sm font-medium ml-3 text-white transition bg-blue-600 rounded hover:bg-blue-700 hover:shadow-xl active:bg-blue-500 focus:outline-none focus:ring"
                        
                    >
                        Decrease
                    </button>
                </article>

            </div>
        </>
    )
}
