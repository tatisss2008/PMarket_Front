
export const ProductCart=(product:any)=>{
    return(
        <div className="card">
        <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Descripción: {product.description}</p>
                <p className="card-text">Precio: {product.price}</p>
                <p className="card-text">Disponible: {product.quantity}</p>

                <a href="#" className="btn btn-primary">Agregar</a>
            </div>
        </div>
    )
}