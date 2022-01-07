import '../styles/components/pages/espiritus.css'

const Espiritus = (props) => {
    return (
        <main className="holder">
        <div className="spirits">
            <h2>CONOCE A LOS ESPIRITUS</h2>
            <div className="espiritus">
                <div className="espiritu">
                    <img src="img/kiko.jpg" alt="kiko" />
                    <h5>Kiko</h5>
                    <h6>espiritu familiar de ahri</h6>
                    <p>El travieso Kiko acompaña a Ahri como una encarnación zorruna de su carisma... y su descaro. 
                        Incluso sin venir a cuento, Kiko no se corta en expresar cómo se siente realmente, aunque solo Ahri pueda entender su lenguaje singular. 
                        A pesar de lo mordaz que puede llegar a ser, esta pequeña criatura deja a un lado el orgullo a cambio de mimos y cosquillas en la barriga. 
                        A ver si sois capaces de no decir "ohh".</p>
                </div>
                <div className="espiritu">
                    <img src="img/shisa.jpg" alt="SHISA" />
                    <h5>Shisa</h5>
                    <h6>espiritu familiar de soraka</h6>
                    <p>Cascarrabias y sobreprotectora, Shisa protege a Soraka de cualquier amenaza a su seguridad, incluida su propia ingenuidad. 
                        La tenaz criatura suele frustrarse por la confiada naturaleza de Soraka, y se enfurruña durante ratos largos, pero se dice que el helado de alubias rojas reduce la duración de su rabieta a la mitad.</p>
                </div> <div className="espiritu">
                    <img src="img/boki baki.jpg" alt="bokibaki" />
                    <h5>Boki y Baki</h5>
                    <h6>espiritu familiar de miss fortune</h6>
                    <p>Boki y Baki son gemelos nacidos del deseo de venganza de Sarah Fortune, cosa que apenas se nota con su actitud juguetona de "amigos para siempre". 
                        Cuando Miss Fortune carga con ardiente rabia, este dúo se une a ella desde una perspectiva más calmada. 
                        ¡Ver a los malvados arder no tiene gracia si no puedes celebrarlo con un choque de pompis!.</p>
                </div> <div className="espiritu">
                    <img src="img/multi.jpg" alt="multi" />
                    <h5>Multi</h5>
                    <h6>espiritu familiar de syndra</h6>
                    <p>Multi, una manifestación triple del increíble poder de Syndra, representa una variedad de emociones. 
                        Estos orbes endiablados emiten grititos y risas mientras transmiten la voluntad de la veterana guardiana. 
                        Nunca se alejan demasiado de ella; es el centro de su pequeño universo y la única que puede equilibrar su energía.</p>
                </div> <div className="espiritu">
                    <img src="img/yuuto.jpg" alt="yuuto" />
                    <h5>Yuuto</h5>
                    <h6>espiritu familiar de Ezreal</h6>
                    <p>Yuuto es un reflejo del joven espíritu aventurero de Ezreal, aunque prefiere presenciar los viajes desde el interior del guante del explorador. 
                        Eso sí: cuando sale, el felino merodea libremente por los cielos, actuando como un valioso oteador. 
                        También puede fusionarse con Ezreal para darle alas angelicales y el poder de volar, algo que suele dejar impresionadas a las damas.</p>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Espiritus;