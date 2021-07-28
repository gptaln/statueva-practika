import {Navbar} from './Navbar'
import React from 'react'
import {Helmet} from 'react-helmet'

interface IMainLayout {
    title?: string
}

export const MainLayout: React.FC<IMainLayout> = ({title, children}) => {
    return (
        <>
            <Helmet>
                <title>{`Портфолио${title ? ` | ${title}` : ''}`}</title>
            </Helmet>
            <div>
                <Navbar/>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}