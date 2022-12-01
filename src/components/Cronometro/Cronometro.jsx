import React, {useState, useEffect} from 'react'
import{ TimeCronometro, ButtonCronometro} from './CronometroStyled'



const Cronometro = () => {

    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [time, setTime] = useState(0)

    React.useEffect(() => {
        let interval = null;
        
        if(isActive && isPaused === false){
            interval = setInterval(() => {
                setTime((time) => time +1);
            }, 10)
        } else{
            clearInterval(interval);
        }
        return () =>{
            clearInterval(interval);
        }
    }, [isActive, isPaused])

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(false)
    }

    const handlePause = () => {
        setIsPaused(!isPaused)
    }

    const handleReset = () => {
        setIsActive(false)
        setTime(0)
    }
  return (
    <TimeCronometro>
                <span>{time}</span>
        <ButtonCronometro onClick={handleStart}>Iniciar</ButtonCronometro>
        <ButtonCronometro onClick={handleReset}>Reiniciar</ButtonCronometro>
    </TimeCronometro>
  )
}

export default Cronometro