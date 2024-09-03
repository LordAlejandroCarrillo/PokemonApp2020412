import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonApp } from './components/PokemonApp'
//import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PokemonApp />
    </React.StrictMode>
)