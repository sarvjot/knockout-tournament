import React from "react";
import Header from "./Header";
import Body from "./Body";
import Form from "./Form";
import { nanoid } from "nanoid";
import randomColor from "randomcolor";
import Confetti from "react-confetti";

export default function App() {
	const [players, setPlayers] = React.useState(JSON.parse(localStorage.getItem("players")) || []);
	const [gameOver, setGameOver] = React.useState(JSON.parse(localStorage.getItem("gameOver")) || false);

	function addPlayer(name) {
		setPlayers((prevPlayers) => [
			...prevPlayers,
			{
				id: nanoid(),
				name: name,
				color: randomColor({
					luminosity: "bright",
				}),
			},
		]);
	}

	function eliminatePlayer(delete_player) {
		setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== delete_player.id));
	}

	React.useEffect(() => {
		localStorage.setItem("players", JSON.stringify(players));
	}, [players]);

	React.useEffect(() => {
		localStorage.setItem("gameOver", JSON.stringify(gameOver));
	}, [gameOver]);

	return (
		<main className="app-container">
			<Header />
			<Body players={players} eliminatePlayer={eliminatePlayer} />
			<Form addPlayer={addPlayer} gameOver={gameOver} setGameOver={setGameOver} />
			{gameOver && <Confetti />}
		</main>
	);
}
