import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';
import { ActionTypes } from '../redux/constants/actionTypes';


function ProductDetail() {
  let isLoading = true;

  const { productId } = useParams();
  const dispatch = useDispatch();
  const thisProduct = useSelector((state) => state.thisProduct);
  const { id, title, price, description, category, image } = thisProduct;
  // const {rating} = thisProduct;
  // if(rating) {
  //   const { count, rate } = rating;
  // }
  console.log("thisProduct", thisProduct)

  const getDetails = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((productDetail) => {
        return productDetail?.data
      })
      .catch((error) =>  {
        console.log("[Error]", error);
        isLoading = false;
        throw new Error(error);
      })
      .finally(() => {
        isLoading = false;
      })

    dispatch(selectedProduct(res));
    isLoading = false;
  }


  useEffect(() => {
    if (productId) getDetails();
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])


  return (
    <>
    <div className='row'>
      <div className='col-md-6'>
        <h2>Product View</h2>
        <div className='img-container'>
        <img src={image} className='rounded float-start' alt={`prodcut image with ${productId} `} />
        </div>
      </div>
      <div className='col-md-6'>
        <h2>Product Description</h2>
        <article className='details'> 
          <h3> { title } | <h5 className='category_bg'><i> {category}</i></h5></h3>
          <hr />
          <p>{description}</p>
        </article>
      </div>
    </div>
    </>
  )
}

export default ProductDetail