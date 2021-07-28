import {MainLayout} from '../../layouts/MainLayout'
import React from 'react'
import {HomeContent} from '../../components/HomeContent/HomeContent'

export const HomePage: React.FC = () => {

    return (
        <MainLayout title="Главная">
            <HomeContent/>
        </MainLayout>
    )

}