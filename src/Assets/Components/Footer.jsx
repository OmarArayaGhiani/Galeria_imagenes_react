import React from "react";

const Footer = () => {
    return (
        <div className="container">
            <hr className="border border-4 border-primary rounded" />
            <div className="text-center my-4">
                <h4 className="mb-3">Heartstone es un juego de cartas coleccionables de Activision Blizzard</h4>
                <p>
                    Para ver más visita la página oficial de 
                    <a href="https://hearthstone.blizzard.com/es-es" target="_blank" className="text-decoration-none fw-bold"> Heartstone</a>
                </p>
                <p className="mb-4">
                    Para ver más estadísticas visita
                    <a href="https://hsreplay.net/" target="_blank" className="text-decoration-none fw-bold"> HSReplay</a>
                </p>
            </div>
        </div>
    )
}

export default Footer