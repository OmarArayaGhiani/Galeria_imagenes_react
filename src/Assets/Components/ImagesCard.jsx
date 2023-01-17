const ListImagesCards = (props) => {
    const {lista} = props
    return (
        <div className="row m-0 mb-5">
            {lista.map((element) => (
                <div className="col-12 col-md-6 p-5">
                    <a id={element.id} href={element.link} target="_blank" className="text-decoration-none">
                        <div key={element.key} className="customCard align-items-center">
                            <img src={element.src} alt={element.name} />
                            <div>
                                <h2 className="mt-4 mt-xxl-0">{element.name}</h2>
                                <hr className="border border-4 border-primary rounded mb-5" />
                                <p><span className="fw-bold">Habilidad:</span> {element.text}</p>
                                <p><span className="fw-bold">Clase:</span> {element.class}</p>
                                <p><span className="fw-bold">Tipo:</span> {element.type}</p>
                                {
                                    element.race ? (
                                        <p><span className="fw-bold">Raza:</span> {element.race}</p>
                                    ) : ""
                                }
                                <p><span className="fw-bold">Rareza:</span> {element.rarity}</p>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default ListImagesCards

