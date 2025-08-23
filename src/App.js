import { useState } from 'react'
import {Input} from 'Input'
import {Square} from 'Square'

function App() {
    const [colorValue, setColorValue] = useState('');
    const [hexValue, setHexValue] = useState('');
    const [isDarkText, setIsDarkText] =useState(false);

    return (
        <div className="App">
            <Square
                colorValue = {colorValue}
                hexValue = {hexValue}
                isDarkText = {isDarkText}
            />
            <Input
                colorValue = {colorValue}
                setColorValue = {setColorValue}
                setHexValue = {setHexValue}
                isDarkText = {isDarkText}
                setIsDarkText = {setIsDarkText}
            />
        </div>
    )
}

// import Content from './Content';
// import Header from './Header';
// import Footer from './Footer';
// import Content2 from './Content2';
//
// function App() {
//
//   return (
//     <div className="App">
//       <Header/>
//       <Content/>
//       <Content2/>
//       <Footer/>
//     </div>
//   );
// }

export default App;
