
export const productCart=()=>{
    return(
        <div className="card">
        <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.precio}</p>
                <p className="card-text">{product.quantity}</p>

                <a href="#" className="btn btn-primary">Agregar</a>
            </div>
        </div>
    )
}