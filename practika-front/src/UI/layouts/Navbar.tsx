import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from 'react-materialize'
import {themeStore} from '../../BLL/models/theme'
import {useStore} from '@proscom/prostore-react'

export const Navbar: React.FC = () => {

    const [themeState, themeStoreInstance] = useStore(themeStore)

    const changeTheme = () => {
        themeStoreInstance.changeTheme(
            themeState === 'dark' ? 'light' : 'dark'
        )
    }

    return (
        <nav className="deep-purple lighten-2">
            <div className="nav-wrapper">
                <NavLink className="brand-logo" to="/">
                    <i className="material-icons">account_circle</i>
                    Статуева Алина
                </NavLink>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink className="create_page" to="/about">
                            <i className="material-icons">Портфолио</i>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <Button onClick={changeTheme}>
                Сменить тему
            </Button>
        </nav>
    )
}