import React, { useEffect } from 'react'
import {Col, Row, Card,Spinner} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Header from '../Components/Header'
import { fetchProducts } from '../REDUX/slices/productSlice'


function Home() {

  const dispatch = useDispatch()
  const {allProducts,error,loading} = useSelector(state=>state.productReducer)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <>
      <Header insideHome={true}/>
      <div style={{marginTop:'100px'}} className="conatainer-fluid">
        {
          loading ?
            <div className='text-center mt-5 fw-bolder'>
              <Spinner className='me-2' animation="border" variant="info" />Loading..
            </div>
          : 
          <Row className='my-5'>
          {
            allProducts?.length>0 ?
            allProducts?.map(product=>(
              <Col key={product?.id} className='mb-5 ' sm={12} md={6} lg={4} xl={3} >
              <Card className='shadow rounded' style={{ width: '18rem' }}>
                <Card.Img height={'180px'} variant="top" src={product?.thumbnail} />
                <Card.Body className='text-center'>
                  <Card.Title>{product?.title.slice(0,20)}</Card.Title>
                  <Link to={`/${product?.id}/view`} className='text-left' >View More..</Link>
                </Card.Body>
              </Card>
              </Col>
            ))
            :
            <div className='fw-bolder text-center mt-5 mb-5 text-danger'>
              Product Not found !!
            </div>
          }
          
          </Row>
        }
        
      </div>
    </>
  )
}

export default Home