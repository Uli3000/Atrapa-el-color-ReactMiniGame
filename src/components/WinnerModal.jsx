import { Square } from "./Square.jsx"

export function WinnerModal({winner , startGame}) {
    if (winner === null) return

    const winnerText = winner === false ? 'Perdió' : 'Ganó:'
    const winnerEmoji = winner === false ? '❌' : '✅'

    return (
        <section className="winner">
            <div className="text">
                <h2>
                    {winnerText}
                </h2>

                <header className="win">
                    {<Square>{winnerEmoji}</Square>}
                </header>

                <footer>
                    <button onClick={startGame}>Empezar de nuevo</button>
                </footer>

            </div>
        </section>
    )
}