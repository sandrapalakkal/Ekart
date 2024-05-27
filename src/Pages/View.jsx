import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList } from '../REDUX/slices/wishlistSlice'
import { addToCart } from '../REDUX/slices/cartSlice'

const View = () => {
  const[product,setProduct] = useState({})
  const {id} = useParams()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  console.log(userWishlist);
  console.log(userCart);

  useEffect(()=>{
    if(localStorage.getItem("allProducts")){
      const allProducts= JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])

const handleWishlist = ()=>{
  if(userWishlist?.includes(product)){
    alert("Item already in your Wishlist!!")
  }else{
    dispatch(addToWishList(product))
  }
}

const handleCart = ()=>{
  const existingProduct = userCart?.find(item=>item.id==product.id)
  if(existingProduct){
    dispatch(addToCart(product))
    alert("One more item is added!!")
  }else{
    dispatch(addToCart(product))
  }
}

  return (
    <>
    <Header/>
    <div style={{marginTop:'150px',height:'70vh'}}className='container d-flex align-items-center'>
    <div className="row align-items-center mb-5 w-100">
<div className="col-lg-5">

<img className='w-100' height={'300vh'} src={product?.thumbnail} alt="product image" />
</div>
<div className="col-lg-1"></div> <div className="col-lg-6">

<h5>PID: {product?.id} </h5>

<h1>{product?.title}</h1>

<h3 className="fw-bolder text-danger">$ {product?.price}</h3>
 <p style={{textAlign: 'justify'}}> <span className='fw-bolder'> Description: </span> {product?.description}</p>

<div className="d-flex justify-content-between at-3">

<button onClick={handleWishlist} className="btn btn-outline-dark"><i className ="fa-solid fa-heart text-danger"> </i> Add

to Wishlist</button>

<button onClick={handleCart} className="btn btn-outline-dark"><i class="fa-solid fa-cart-plus text-success"></i>Add to Cart</button>

</div> 
</div>

</div>

</div>




    </>
  )
}

export default View