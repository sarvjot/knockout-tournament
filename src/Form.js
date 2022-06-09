import React from "react";

export default function Form({ addPlayer, gameOver, setGameOver}) {
    const [playerName, setPlayerName] = React.useState("");

    function handleChange(e){
        setPlayerName(e.target.value);
    }

	function handleSubmit(e) {
		e.preventDefault();
		addPlayer(playerName);
        setPlayerName("");
	}

	function handleGameOver(e){
		e.preventDefault();
		setGameOver(prevGameOver => !prevGameOver);
	}

	return (
		<form>
			<input className="name-input" type="text" placeholder="Enter Name" value={playerName} onChange={handleChange}></input>
			<button className="form-button button-styles" onClick={handleSubmit}>
				Add Player
			</button>
			<button className="form-button button-styles" onClick={handleGameOver}>
				{gameOver ? "Start Game !" : "Game Over !"}
			</button>
		</form>
	);
}
