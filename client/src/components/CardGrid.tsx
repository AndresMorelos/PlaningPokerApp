import React from 'react'


interface Props {
    children: React.ReactNode
    cols?: string
}

const Cardgrid: React.FC<Props> = ({ children, cols = 3 }) => {
    return (
        <div className={`p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-${cols} gap-5`}>
            {children}
        </div>
    )
}

export default Cardgrid;