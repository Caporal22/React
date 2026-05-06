import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { PokemonPage } from './03-examples/PokemonPage'
import FocusScreen from './04-useRef/FocusScreen'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithHook'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { TrafficLight } from './01-useState/TrafficLight'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>,
)
