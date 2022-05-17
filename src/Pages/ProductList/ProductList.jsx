import './ProductList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummydata'; 
import {Link} from 'react-router-dom'
import { useState } from 'react';

const ProductList = () => {
    const [data,setData] = useState(productRows)
    const handleDelete =(id) =>{
        setData(data.filter((item) => item.id != id));
    }
    const columns = [ 
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'product', headerName: 'Product', width: 190,renderCell:(params) =>{
            return(
                <div className='productListItem'>
                    <img src={params.row.avatar} alt="" className="productListImg" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'Stock', headerName: 'Email', width: 170 },
        {
          field: 'status',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'price',
          headerName: 'Price',
         
          width: 160,
         },
         {
             field:'action',
             headerName:"Action",
             width:150,
             renderCell:(params)=>{
                return(
                    <div>
                         <Link to={"/product/" + params.row.id}>
                        <button className='userListEdit'>Edit</button>
                        </Link>
                    
                    <DeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row.id)}/>
                    </div>
                 )
             }
             
         }
      ];
    return (
    <div className='productList'> 
     <DataGrid
    rows={data}
    disableSelectionOnClick columns={columns}
    pageSize={8}
    
    checkboxSelection
  /></div>
  )
}

export default ProductList