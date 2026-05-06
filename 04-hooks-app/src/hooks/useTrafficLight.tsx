import { useEffect, useState } from "react"

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

export type TrafficLightColor = keyof typeof colors;

const useTrafficLight = () => {
    const [light, setLight ] = useState<TrafficLightColor>('red');
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        if(countdown === 0) return;

        const intervalId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    },[countdown]);

    // Change color
    useEffect(() => {
        if(countdown > 0) return;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCountdown(5);

        if(light=== 'red') {
            setLight('green');
            return
        }

        if(light=== 'yellow') {
            setLight('red');
            return
        }

        if(light=== 'green') {
            setLight('red');
            return
        }

    }, [countdown, light]);

  return {
    // Props
    countdown, 
    light, 
    colors, 

    // Computer
    percentage: (countdown / 5) * 100,

    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',

    // Methods
  }
}

export default useTrafficLight
