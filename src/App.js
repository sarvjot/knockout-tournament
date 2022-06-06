import React from "react"
import Header from "./Header"
import Body from "./Body"
import Form from "./Form"

export default function App(){
    const [players, setPlayers] = React.useState([]);

    function addPlayer(name){
        setPlayers(prevPlayers => ([...prevPlayers, name]));
    }

    function eliminatePlayer(name){
        setPlayers(prevPlayers => prevPlayers.filter(player => player !== name))
    }

    return (
        <main className="app-container">
            <Header />
            <Body players={players} eliminatePlayer={eliminatePlayer}/>
            <Form addPlayer={addPlayer}/>
        </main>
    )
}