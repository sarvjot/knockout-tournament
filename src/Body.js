import React from "react"
import Card from "./Card"

export default function Body({players, eliminatePlayer}){
    let cards = players.map(player => <Card {...player} key={player.id} eliminatePlayer={() => eliminatePlayer(player.name)}/>);

    return (
        <div className="body">
            {cards}
        </div>
    )
}