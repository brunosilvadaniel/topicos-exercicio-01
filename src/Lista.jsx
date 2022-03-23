export default function Lista({itens, ...props}) {
    return (
        <div className="lista-compras-container">
        <ul className="lista-items">
            {itens.map((p) => (
                <li>{p}</li>
            ))}
        </ul>
    </div>
    );
}
