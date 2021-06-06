import { PlusIcon } from '@heroicons/react/solid';
import React from 'react'

function Personal() {
    return (
        <div className="mt-8 flex justify-between p-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">Personal Information</h1>
                <p className="font-bold text-gray-400 dark:text-gray-200">Add your card and track Statistics</p>
            </div>
            <div className='add-card'>
                <PlusIcon className="h-7" />
                <p>Card</p>
            </div>
        </div>
    )
}

export default Personal
