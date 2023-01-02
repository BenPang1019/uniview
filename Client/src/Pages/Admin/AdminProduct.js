import React, { useEffect, useState} from "react";
import menu from "../../Images/Menu.svg"
import home from "../../Images/Home.svg"
import profile from '../../Images/Profile.svg'
import add from '../../Images/Add.svg'
import edit from '../../Images/Edit.svg'
import searchLogo from '../../Images/searchLogo.svg'
import filter from '../../Images/Filter.svg'
import flower from '../../Images/Flower.jpg'
import eye from '../../Images/Eye.svg'
import pencel from '../../Images/Pencel.svg'
import dele from '../../Images/Delete.svg'
import ReactPaginate from "react-paginate";
import '../Admin/AdminProduct.css'
import { Link,useNavigate,createSearchParams } from 'react-router-dom'

import axios from 'axios'

export const AdminProduct = () => {

    const [product, setProduct] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("/product/getProducts"); 
              console.log(res)
              setProduct(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
    }, []);

    const handleDelete = async (id)=>{
        try {
          await axios.delete(`/product/deleteProduct/${id}`);
          window.location.reload()
        } catch (err) {
          console.log(err);
        }
    };

    const productPerPage = 9
    const pagesVisited = pageNumber * productPerPage

    const displayProduct = product
        .slice(pagesVisited,pagesVisited + productPerPage)
        .map(product => {
        return(
            <div className="card_container" key={product.id}>
                    <p className="productcodeText">{product.id}</p>
                    <img src={product.productImageOne?require(`../../Images/${product.productImageOne}`):null} className='imgstyle'></img>
                    <p className="productText">{product.productName}</p>
                    <div className="col-container">
                        <Link to={`/adminLogin/adminMainPage/adminProduct/viewProduct/${product.id}`}><iconbutton><img src={eye}/></iconbutton></Link>
                        <Link to={`/adminLogin/adminMainPage/adminProduct/updateProduct/${product.id}`}><iconbutton><img src={pencel}/></iconbutton></Link>
                        <iconbutton onClick={() => handleDelete(product.id)}><img src={dele}/></iconbutton> 
                    </div>
            </div>    
        )
    })

    const pageCount = Math.ceil(product.length/ productPerPage)

    const changePage = ({selected}) =>{
        setPageNumber(selected)
    }

    const navigate = useNavigate();

    const navigatetohome= () =>{
        navigate('/adminLogin/adminMainPage');
    };

    const navigatetoadd= () =>{
        navigate('/adminLogin/adminMainPage/adminProduct/addProduct');
    };

    return(

        <div className="adminProduct">
            <section className="APfirstsection">
                <div className="APfirstcontainer">
                    <iconbutton onClick={navigatetohome}><img src={home}/></iconbutton>
                    <button className='backtbtn' onClick={() => navigate(-1)}>BACK</button>
                </div>
            </section>

            <section className='APsecondsection'>
                <div className='APcenter-container'>
                    <div className='APcontainer-2'>
                        <img src={flower} className='imgstyle'></img>
                        <div className='col-secondcontainer'>
                            <h1 className="h1Text">Products</h1>
                            <p className='APwebtext'>manage and add new product here</p>
                        </div>
                        <iconbutton><img src={edit} className='editbtn'/></iconbutton>
                        <iconbutton onClick={navigatetoadd}><img src={add} className='APaddbtn'/></iconbutton>
                    </div>
                </div>
            </section>

            <section className='APthirdsection'>
                <div className='APthirdcontainer'>
                    <input className='APsearchinput' type='text' placeholder='SEARCH PRODUCT...'></input>
                    <iconbutton><img src={searchLogo} className='btn'/></iconbutton>
                    <iconbutton><img src={filter} className='btn'/></iconbutton>
                </div>
            </section>

            <div className='productContainer'>
                        {displayProduct}
            </div>
                
            <ReactPaginate
                    previousLabel={""}
                    nextLabel={""}
                    marginPagesDisplayed={4}
                    pageRangeDisplayed={10}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"} //li
                    pageLinkClassName={"page-link"} //a
            />

        </div>

    )

}