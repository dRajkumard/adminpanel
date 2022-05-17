import './UserList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummydata'; 
import {Link} from 'react-router-dom'
import { useState } from 'react';

const UserList = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [ 
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'user', headerName: 'user', width: 190,renderCell:(params) =>{
            return(
                <div className='userListUser'>
                    <img src={params.row.avatar} alt="" className="userListImg" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 170 },
        {
          field: 'status',
          headerName: 'status',
          width: 130,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
         
          width: 160,
         },
         {
             field:'action',
             headerName:"Action",
             width:150,
             renderCell:(params)=>{
                return(
                    <div>
                        <Link to={"/user/"+ params.row.id}>
                        <button className='userListEdit'>Edit</button>
                        </Link>
                    
                    <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
                    </div>
                 )
             }
             
         }
      ];
     
        return (
    <div className='userList'>
         <DataGrid
        rows={data}
        disableSelectionOnClick columns={columns}
        pageSize={8}
        
        checkboxSelection
      />
        </div>
  )
}

export default UserList