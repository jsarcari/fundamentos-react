import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import Card from './components/layout/Card'

ReactDOM.render(
    <>
        <Card titulo="Card">
            Conteudo
        </Card>
        <Card titulo="Componente">
            <Primeiro />
        </Card>
        <ComParametro titulo="Aqui está o título" subtitulo="teste"></ComParametro>
    </>,
    document.getElementById('root')
)