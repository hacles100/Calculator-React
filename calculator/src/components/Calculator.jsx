import * as React from 'react';
import './Calculator.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Calculator(){

    const [num, setNum] = React.useState(0);
    const [oldNum, setOldNum] = React.useState(0);
    const [operator, setOperator] = React.useState();

    //fucntion input of the result
    function inputNum(e){

        let input = e.target.value

        if(num === 0){
            setNum(input);
        }else {
            setNum(num + input);
        }
      
    }

    //function clear result
    function clear(){
        setNum(0);
    }


    //function porcentage
    function porcentage(){

        setNum(num/100);
    }

    // function change sinal
    function changeSignal(){
        if(num > 0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }

    //function operatorHandler
    function operatorHandler(e){
        
        let operatorInput = e.target.value;
        
        setOperator(operatorInput);
        setOldNum(num)
        setNum(0)

    }

    //function finalResult
    function finalResult(){

        if(operator === '/'){
            setNum(parseFloat(oldNum) / parseFloat(num));

        }else if(operator === 'X'){
            setNum(parseFloat(oldNum) * parseFloat(num));

        }else if(operator === '+'){
            setNum(parseFloat(oldNum) + parseFloat(num));

        }else{
            setNum(parseFloat(oldNum) - parseFloat(num));
        }
    }

    return(
        <div>
          <Box m={5}></Box>
          <Container maxWidth="xs">
          <div className="wrapper">
          <Box m={5}></Box>
          <h1 className='result'>{num}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSignal}>+/-</button>
            <button onClick={porcentage}>%</button>
            <button className='orange' onClick={operatorHandler} value={'/'}>/</button>
            <button className='gray' onClick={inputNum} value={7}>7</button>
            <button className='gray' onClick={inputNum} value={8}>8</button>
            <button className='gray' onClick={inputNum} value={9}>9</button>
            <button className='orange' onClick={operatorHandler} value={'X'}>X</button>
            <button className='gray' onClick={inputNum} value={4}>4</button>
            <button className='gray' onClick={inputNum} value={5}>5</button>
            <button className='gray' onClick={inputNum} value={6}>6</button>
            <button className='orange' onClick={operatorHandler} value={'-'}>-</button>
            <button className='gray' onClick={inputNum} value={1}>1</button>
            <button className='gray' onClick={inputNum} value={2}>2</button>
            <button className='gray' onClick={inputNum} value={3}>3</button>
            <button className='orange' onClick={operatorHandler} value={'+'}>+</button>
            <button className='gray' onClick={inputNum} value={0}>0</button>
            <button className='gray'  onClick={inputNum} value={'.'}>,</button>
            <button className='gray' style={{visibility: 'hidden'}}>,</button>
            <button className='orange' onClick={finalResult} value={setOperator}>=</button>
          </div>
         </Container>
       </div>
       
    )
}

