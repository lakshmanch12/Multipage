// import React, {Component} from 'react'
// import {Card,Button} from 'react-bootstrap';
// import ProductDescription from './description';
// // import CardGroup from 'react-bootstrap/CardGroup';

// export default class ProductDetails extends Component {
//     constructor(props) {
//         super();
//         console.log(props.product)
//         this.state = {
//             products: [],
//             product:props.product.gallery,
//             Description:false,
//             PresentItem:null,
//             button:props.handleClick,
//         };
//     }
//     render() {
//         // let product = this.state.product.gallery
//         console.log("???????????",this.state.product,this.state.Description);
//         return (
//             <>
            
//             {this.state.Description?
//                 <> 
//                 <ProductDescription product={this.state.PresentItem}/>
//                 <Button style={{marginTop:10}} variant="primary" className='product-page' onClick={()=>{this.setState({Description:false,PresentItem:null})}}>ProductPage</Button>
//                 </>:
//                 <div className='row'>
//                 {this.state.product.map((u,ind) =>{
//                     return(
//                  <div className='col-md-3 col-sm-1'>
//                 <Card border="info" key={ind}>
//                     <Card.Img variant="top" src={u.imagelink} />
//                     <Card.Body>
//                     {/* <Card.Title style={{color:"hotpink"}}>{product.imagename}</Card.Title> */}
//                     <Card.Text style={{color:"green"}}>{u.price}</Card.Text>
//                     {/* <Card.Text style={{color:"green"}}>{product.actulprice}</Card.Text> */}
//                     {/* <Card.Text  style={{color:"blue"}}>{u.description}</Card.Text> */}
//                     <div className="product-actions">
//                         {/* <Button variant="primary" style={{marginRight:9}}>Buy Now</Button> */}
//                         {/* <Button variant="primary" onClick={()=>{this.setState({viewDetails:false,currentItem:null})}}>Back</Button> */}
//                         <Button variant="primary" onClick={()=>{
//                             this.setState({PresentItem:u,Description:true})
//                         }}>Viwe Details</Button>
//                     </div>
//                     </Card.Body>
//                 </Card>  
//                 </div>)
//     }) }
//             </div>}    

//         </>

                        
        
//         )

       
//     }
// }
 import React from 'react'
 
 const click = (jkjdnkdjdk) => {
   return (
     <div>uuuehuhfuh</div>
   )
 }
 
 export default click