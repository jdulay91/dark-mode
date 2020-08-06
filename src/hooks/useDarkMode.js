import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'


export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage('dog',value)

 

      useEffect(() => {
          if(darkMode === 'true')  {        
          return document.body.classList.add('dark-mode') 
        }else{
            return document.body.classList.remove('dark-mode')
        }           
      }, [darkMode])

      


    return [ darkMode, setDarkMode ]

}