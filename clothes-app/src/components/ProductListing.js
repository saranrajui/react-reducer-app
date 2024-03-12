import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './Product';
import axios from "axios"
import { ActionTypes } from '../redux/constants/actionTypes';
import { setProducts } from '../redux/actions/productActions';

function ProductListing() {
    const products = useSelector((state) => state);
    const dispatchToProd = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((error) => {
            console.log("error occured", error)
        });
        console.log("respoinse", response);
        dispatchToProd(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])


    console.log("products", products)
    return (
        <div className='row'>
            <ProductComponent />
        </div>

    )
}

export default ProductListing