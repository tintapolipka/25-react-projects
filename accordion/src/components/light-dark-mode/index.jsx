
import './styles.css'

export default function LightDarkMode(){
    document.documentElement.style.setProperty('--light-dark-background', '#000');

    return <div className="light-dark-container">
        <button className="light-dark-button">Change mode</button>
    </div>
}