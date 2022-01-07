import '../styles/components/pages/unete.css'

const Unete = (props) => {
    return (
        <main className="holder">
        <div className="columnas">
            <h2>Unete por la causa</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="mail">Email</label>
                    <input type="email"/>
                </p>
                <p>
                    <label for="">Espiritu</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="comentario">Potencial</label>
                    <textarea id="comentario"></textarea>
                </p>
                <p className="accion"><input type="submit" value="enviar"/></p>

            </form>

        </div>

    </main>
        
    )
}

export default Unete;