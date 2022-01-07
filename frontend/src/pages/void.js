import '../styles/components/pages/void.css'

const Void = (props) => {
    return (
        <main className="holder">

            <div className="fondo_main">

                <h2 className='void_h2'>El vacio</h2>
                <div className="contenedor">
                    <div>
                        <p className="parrafo">Comenzando a gritos su existencia junto al nacimiento del universo, el Vacío
                            es una manifestación de
                            la nada inasible que se encuentra más allá. Es una fuerza con un hambre insaciable,
                            esperando a
                            través de los eones hasta que sus amos, los misteriosos Vigilantes, marquen la hora final.
                        </p>
                    </div>
                    <div>
                        <div className="void_enemy">
                            <img src="img/enemigos.jpg" alt="void_enemy" />
                        </div>
                    </div>
                    <div>
                        <p className="imagen">los enemigos de las guardianas son varios y sus datos aun confusos estos son
                            algunos de los
                            estudiados</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>estar atentos a nuevos descubrimientos</h3>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Void;