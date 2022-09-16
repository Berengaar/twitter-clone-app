import React, { FC } from 'react'

const Container = (components:any) => {
    return (
        <div className='max-w-7xl min-h-screen mx-auto flex'>
            {components.children}
        </div>
    )
}

export default Container