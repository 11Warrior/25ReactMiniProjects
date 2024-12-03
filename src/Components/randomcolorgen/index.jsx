
import {useState} from 'react'

export default function RandomColor() {
    const [typeofColor, setTypeOfColor] = useState('HEX');
    const [color, setColor] = useState("#FFFFFF");
//to generate random colors
    function RandomGen(length){
        return (Math.floor(Math.random() * length));
    }

    function HexColor() {
        //array of 1 - 9 and alphabets(A to F)
        const hex = [1, 2, 3, 4, 5, 6 ,7, 8, 9 , 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#';

        for (let i = 0; i < 6; i++){
            hexColor += hex[RandomGen(hex.length)];
        }
        setColor(hexColor);
    }
    function RGBColor() {
        const r = RandomGen(256);
        const g = RandomGen(256);
        const b = RandomGen(256);

        setColor(`rgb(${r},${g}, ${b})`);
        
    }
    
    return(
    <div className="RandomColor"
        style= {{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100wh',
            padding: '20px',
            gap: '20px',
            background: color
        }}>

        <button onClick = {() => setTypeOfColor('HEX')}>Create hex </button>
        <button onClick= {() => setTypeOfColor('RGB')}>Create rgb </button>
        <button onClick = {typeofColor === 'HEX' ? HexColor : RGBColor}>Generate</button>
        <div style= {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '50px'
        }}>
            <h1>{typeofColor}</h1>
            <h4>{color}</h4>
        </div>
    </div>
    );

}