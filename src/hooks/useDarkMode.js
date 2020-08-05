import {useLocalStorage} from './useLocalStorage'


export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage('dog',value)
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

    return [ darkMode, setDarkMode, toggleMode ]

}