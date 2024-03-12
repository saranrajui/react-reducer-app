import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

function ProductComponent() {
    const navigateTo = useNavigate();
    const thisStyle = {
        height: 225 + "px",
        width: 100 + "%",
        display: "block"
    }

    const products = useSelector((state) => state.allProducts.products);
    const renderDom = products.map((product) => {

        const { id, title, image, price, category } = product;
        return (
            <>
                {/* <span className='card-wrapper'> */}
                <div className='col-md-4'>
                    <Link to={`/product/${id}`}>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" src={image} style={thisStyle} alt="Card image cap" />
                            <div className="card-body">
                                <div className='card-text'>
                                    <h5 className="card-title" key={title}>{title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted" key={price}> {price}</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <a href="#" className="card-link" key={category}> {category}</a>
                                        <button className="card-link btn btn-secondary" key={title}
                                        >Link</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* </span> */}

                {/* <div className='col-md-3'>
                    <div className='product-wrapper'>
                        <div className='card'>
                            <div className='image'>
                                <img src={image} alt={title} />
                            </div>
                            <div className='content'>
                                <div className='header' key={title}> {title}</div>
                                <div className='meta price' key={price}>$ {price}</div>
                                <div className='meta' key={category}>{category}</div>
                            </div>

                        </div>
                    </div>
                </div> */}
            </>
        )
    })
    return (
        <>
            {renderDom}
        </>
    )
}

export default ProductComponent