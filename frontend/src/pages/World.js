import '../styles/components/pages/World.css'


const World = (props) => {
    return (
        <main>
            <img src="img/guardianas primeragen.jpg" alt="panorama" width="100%" />
            <div className="holder">
                <div className="textoleft">
                    <h2 className="h2_main">CONOCE A LAS GUARDIANAS</h2>
                    <p className="descripcion">Las Guardianas Estelares están en todo el cosmos, pero se desconoce cuántas
                        hay. De
                        todas,
                        estas son las más deslumbrantes que han surgido a la luz.</p>
                </div>
                <div className="guardianas">
                    <a className="boton" href="/guardianas">
                        <button className="boton">
                            <span>Biografia</span>
                        </button>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default World;