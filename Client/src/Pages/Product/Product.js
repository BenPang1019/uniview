import React, { useState,useEffect } from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios';
import './Product.css'
import PopularOne from '../../Images/PopularOne.svg'
import { Link,useNavigate,createSearchParams } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import ReactPaginate from "react-paginate";

export const Product = () =>{
    const [radioValue, setRadioValue] = useState();
    const [activeSelected, setActiveSelected] = useState(false);
    const [selectValue, setSelectValue] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        category: [''],
        brand: '',
        type: '',
      }); 
    const [product, setProduct] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)

    const productPerPage = 12
    const pagesVisited = pageNumber * productPerPage

    const displayProduct = product
    .filter(prod =>
        prod.category.includes(filters.category) &&
        prod.brand.includes(filters.brand) &&
        prod.type.includes(filters.type)
      )
    .filter((product)=>{
        if (searchTerm == ""){
            return product
        }else if(product.productName.replaceAll(/\s/g,'').toLowerCase().includes(searchTerm.toLowerCase().replaceAll(/\s/g,''))){
            return product
        }
    })
    .slice(pagesVisited,pagesVisited + productPerPage)
    .map(product => {
        return(
            <div className='imageContainer ' key={product.id}>
                <img src={require(`../../Images/${product.productImageOne}`)} className="image"/>
                <div className='productName'>
                <Link style={{ textDecoration:'none' }} to="/productsDetails" state={{ product:product }}>{product.productName}</Link>
                </div>
                <div className='productPrice'>
                <h3 >RM{product.productPrice}</h3>
                </div>
            </div>   
        )
    })

    const pageCount = Math.ceil(product.length/ productPerPage)

    const changePage = ({selected}) =>{
        setPageNumber(selected)
    }

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`/product/getProducts`); 
              console.log(res)
              setProduct(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);


    
    const selectOption = event => {
      setSelectValue(event.target.value);
      if(event.target.value === '1'){
          setProduct(prevState => {
              let newState = [...prevState];
              newState.sort((a, b) => a.productPrice > b.productPrice ? 1 : -1);
              return newState;
          });
      
      } else
      if(event.target.value ==='2'){
        setProduct(prevState => {
            let newState = [...prevState];
            newState.sort((a, b) => a.productPrice < b.productPrice ? 1 : -1);
            return newState;
        });
      }
    }

    console.log(radioValue)
    return(
        <div className='product'>
            <Navbar/>
                <div className='filterContainer'>
                    <h1 className='filterHOne'>Browse By</h1>
                    <input className='filterInput' onChange={event => {setSearchTerm(event.target.value)}}></input>
                    <div className='filterButtonSearchContainer'>
                    <button className='filterSearchButton' >Search</button>
                    </div>
                    <div className='filterButtonClearContainer'>
                    <button className='filterClearButton' onClick={ () => {setFilters({category: '',brand: '',type: ''});setRadioValue('')}}>Clear All</button>
                    </div>
                    <div className='containerCategory'>
                      <h3 className='containerCategoryH'>Categories</h3>
                      <ul>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Access Control System',})}}/><label>Access Control System</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'abc',})}}/><label>Accessories</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'test',})}}/><label>Auto Door System</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Backup Battery',})}}/><label>Backup Battery</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Card & Weigand Reader',})}}/><label>Card & Weigand Reader</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'CCTV Recorders',})}}/><label>CCTV Recorders</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'CCTV Security Camera System',})}}/><label>CCTV Security Camera System</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Display Monitor',})}}/><label>Display Monitor</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Draka Cable',})}}/><label>Draka Cable</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'IP PBX System',})}}/><label>IP PBX System</label><br/>
                        <div className='nextRowCategory'>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Metal Detector',})}}/><label>Metal Detector</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Networking',})}}/><label>Networking</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Security Alarm System',})}}/><label>Security Alarm System</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Security Gate System',})}}/><label>Security Gate System</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Server Rack',})}}/><label>Server Rack</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Smart Door Lock',})}}/><label>Smart Door Lock</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Solar System Solution',})}}/><label>Solar System Solution</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Thermal Imaging Camera',})}}/><label>Thermal Imaging Camera</label><br/>
                        <input type="checkbox"  onClick={() => {setFilters({...filters,category: 'Video Intercom',})}}/><label>Video Intercom</label>
                        </div>
                      </ul>
                    </div>

                    <div className='containerBrand'>
                      <h3 className='containerBrandH'>Brands</h3>
                      <ul>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Belden',})}}/><label>Belden</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Bluguard',})}}/><label>Bluguard</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Casa Asia',})}}/><label>Casa Asia</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Dahua',})}}/><label>Dahua</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Draka',})}}/><label>Draka</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'E-jarvis',})}}/><label>E-jarvis</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Ezviz',})}}/><label>Ezviz</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Fanvil',})}}/><label>Fanvil</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Hanwha',})}}/><label>Hanwha</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Imou',})}}/><label>Imou</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'IP-COM',})}}/><label>IP-COM</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'OAE',})}}/><label>OAE</label>
                        <div className='nextRowBrand'>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Optic Digital',})}}/><label>Optic Digital</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Ruijie',})}}/><label>Ruijie</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'ViewSonic',})}}/><label>ViewSonic</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Vivos',})}}/><label>Vivos</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Vlock',})}}/><label>Vlock</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Voom',})}}/><label>Voom</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'VSH',})}}/><label>VSH</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'WBDP',})}}/><label>WBDP</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Reolink',})}}/><label>Reolink</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'Hikvision',})}}/><label>Hikvision</label><br/>
                        <input type="radio" name="brand" onClick={() => {setFilters({...filters,brand: 'ZKteco',})}}/><label>ZKteco</label>
                        </div>
                      </ul>
                    </div>

                    <div className='containerType'>
                      <h3 className='containerTypeH'>Type (CCTV)</h3>
                      <ul>
                        <input type="radio" name="type" onClick={() => {setFilters({...filters,type: 'Audio',})}}/><label>Audio</label><br/>
                        <input type="radio" name="type" onClick={() => {setFilters({...filters,type: 'Cube',})}}/><label>Cube</label><br/>
                        <input type="radio" name="type" onClick={() => {setFilters({...filters,type: 'Fisheye',})}}/><label>Fisheye</label><br/>
                        <input type="radio" name="type" onClick={() => {setFilters({...filters,type: 'Full Color',})}}/><label>Full Color</label><br/>
                        <input type="radio" name="type" onClick={() => {setFilters({...filters,type: 'Normal  Hole',})}}/><label>Normal  Hole</label><br/>
                        <input type="radio" name="type" onClick={() => {setFilters({...filters,type: 'PTZ',})}}/><label>PTZ</label><br/>
                        <input type="radio" name="type" onClick={() => {setFilters({...filters,type: 'Turbo HD ColorVu',})}}/><label>Turbo HD ColorVu</label><br/>
                        <input type="radio" name="type" onClick={() => {setFilters({...filters,type: 'WIFI',})}}/><label>WIFI</label>
                      </ul>
                    </div>
                </div>
                <div>
                </div>

                <div className='selectOptionContainer'>
                    <select className='selectOption' value={selectValue} onChange={selectOption}>
                      <option disabled={true} value="">Sort By Latest</option>
                      <option value="1">Sort By Low to High</option>
                      <option value="2">Sort By High to Low</option>
                    </select>
                </div>

                <div className='productContainer'>
                        {displayProduct}
                </div>
                <ReactPaginate
                    previousLabel={""}
                    nextLabel={""}
                    breakLabel="..."
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    breakClassName={"break"}
                    pageClassName={"pageItem"} //li
                    pageLinkClassName={"pageLink"} //a
                    activeLinkClassName={"pageLinkActive"}
                    />  
            <Footer/>
        </div>
    )
}