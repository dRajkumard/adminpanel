        import './Product.css'
        import {Link} from 'react-router-dom'
        import Chart from '../../components/Chart/Chart'
        import { productData } from '../../dummydata'
import { Publish } from '@material-ui/icons'
        const Product = () => {
        return (
            <div className='product'>
                <div className="productTitleContainer">
                    <h1 className="productTitle">Service Man Info</h1>
                    <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                    </Link>
                    </div>
                    <div className="productTop">
                        <div className="productTopLeft">
                            <Chart data={productData} datakey="Sales" title="Service Performance"/>
                            </div>
                        <div className="productTopRight">
                            <div className="productInfoTop">
                                <img src="https://th.bing.com/th/id/OIP.r_vXPItWuF57OJ4vxql_eQHaE8?pid=ImgDet&rs=1" className="productInfoImg" alt="" />
                                <span className="productName">Electrician</span></div>
                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="productInfoKey">id</span>
                                    <span className="productInfoValue">123</span>
                                    </div>
                                    <div className="productInfoItem">
                                    <span className="productInfoKey">Performance</span>
                                    <span className="productInfoValue">Good</span>
                                    </div>
                                    <div className="productInfoItem">
                                    <span className="productInfoKey">Active</span>
                                    <span className="productInfoValue">yes</span>
                                    </div>
                                    <div className="productInfoItem">
                                    <span className="productInfoKey">Available Time</span>
                                    <span className="productInfoValue">8.00 AM-6.00 pm</span>
                                    </div>
                                    
                                    </div>
                                    </div>
                        </div>
                    <div className="productBottom">
                        <form className="productForm">
                            <div className="productFormLeft">
                                <label htmlFor="">ProductName</label>
                                <input type="text" placeholder='Electrician' />
                                <label htmlFor="">Performance</label>
                                <select name="inStock" id="idStock">
                                    <option value="yes">Good</option>
                                    <option value="no">Bad</option>
                                    </select>
                                    <label htmlFor="">Active</label>
                                    <select name="active" id="active">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                    </select>
                                </div>
                            <div className="productFormRight">
                                <div className="productUpload">
                                    <img src="https://ouunv3qf03-flywheel.netdna-ssl.com/wp-content/uploads/2021/03/careerbuilder-original-3580-980x654.jpg" alt="" className="productUploading" /></div>
                                    <label htmlFor="file"><Publish/></label>
                                    <input type="file" id="file" style={{display:"none"}}/>
                                    </div>
                                    <button className="productButton">Update</button>
                            </form></div>
                </div>
        )
        }

        export default Product