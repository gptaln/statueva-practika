import {BehaviorStore, ValueStore} from '@proscom/prostore'


export class ThemeStore extends ValueStore<Theme>{
    constructor() {
        super('light')
    }

    changeTheme(theme: Theme) {
        this.setState(theme)
    }
}

export const themeStore = new ThemeStore()

themeStore.state$.subscribe(
    state => console.log(state)
)

// types

export type Theme = 'dark' | 'light'