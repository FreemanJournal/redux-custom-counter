import React from 'react'
import CreateTask from './CreateTask'
import ViewTask from './ViewTask'

export default function Todo() {
  return (
    <div className='bg-slate-400 pt-4 h-screen '>
      <CreateTask />
      <ViewTask />

    </div>
  )
}
