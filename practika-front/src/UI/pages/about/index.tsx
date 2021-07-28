import {MainLayout} from '../../layouts/MainLayout'
import React from 'react'
import {AboutContent} from '../../components/AboutContent/AboutContent'

export const AboutPage: React.FC = () => {

    return (
        <MainLayout title="Проекты">\
            <AboutContent/>
        </MainLayout>
    )

}