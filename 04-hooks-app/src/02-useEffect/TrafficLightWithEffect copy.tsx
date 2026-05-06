import { useState, useEffect } from "react";

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;

// Definimos el orden del semáforo como constante fuera del componente
// para no recrearla en cada render
const LIGHT_ORDER: TrafficLightColor[] = ['red', 'green', 'yellow'];
const COUNTDOWN_INITIAL = 5;

export const TrafficLightWithEffect = () => {

  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(COUNTDOWN_INITIAL);

  // Efecto 1: solo maneja el countdown — atómico
  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);

  // Efecto 2: solo cambia el color cuando countdown llega a 0 — atómico
  useEffect(() => {
    if (countdown > 0) return;

    // Calculamos el siguiente color basado en el orden definido
    const currentIndex = LIGHT_ORDER.indexOf(light);
    const nextIndex = (currentIndex + 1) % LIGHT_ORDER.length;
    setLight(LIGHT_ORDER[nextIndex]);

    setCountdown(COUNTDOWN_INITIAL);
  }, [countdown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">

        <h1 className="text-white text-3xl font-thin">Semáforo con useEffect</h1>
        <h2 className="text-white text-xl">Countdown {countdown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${(countdown / COUNTDOWN_INITIAL) * 100}%` }}
          />
        </div>

        {Object.keys(colors).map((color) => (
          <div
            key={color}
            className={`w-32 h-32 ${light === color ? colors[color as TrafficLightColor] : 'bg-gray-500'} rounded-full`}
          />
        ))}

      </div>
    </div>
  );
};