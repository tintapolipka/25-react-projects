import useLocalStorage from "./useLocalStorage.jsx"
import './styles.css'

export default function DarkLightMode(){

    const [theme,setTheme] = useLocalStorage('theme','dark');

    function handleToggleTheme(){
        setTheme(theme === 'light'?'dark':'light')
        console.log(theme)
    }

    return (
        <div className="light-dark-mode" data-theme={theme}>
          <div className="container">
            <p>Hello World !</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
          </div>
        </div>
      );
}