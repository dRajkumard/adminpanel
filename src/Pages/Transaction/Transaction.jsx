import './Transaction.css'
import { ArrowDownward } from '@material-ui/icons'
import TransactionServiceMan from './TransactionServiceman/TransactionServiceMan'
import TransactionClients from './TransactionClients/TransactionClients'
import { useState } from 'react'


 const Transaction = () =>{
     const [userhistory, setUserhistory] = useState(<TransactionClients/>);
    // / const [serviceManhistor, setServiceManhistory] = useState(<TransactionServiceMan/>)
       const client = (TransactionClients) =>{
            setUserhistory(<TransactionClients/>)
        }
        const serviceMan = (TransactionServiceMan) =>{
            setUserhistory(<TransactionServiceMan/>)
        }
     return( 
         <div className='transaction'>   
         <div className="container">
             <div className="clientList" onClick={() => client(TransactionClients)} >
             <span className="title">Client Transaction</span>
            <div className="clientTransactionAmount">
                <span className="Money">$2,453</span>
                <span className="MoneyRate">
                    -11.4 <ArrowDownward className='featuredIcon down'/>
                    </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
             </div>
             <div className="serviceManList" onClick={() => serviceMan(TransactionServiceMan)}>
             <span className="title">ServiceMan Transaction</span>
            <div className="serviceManTransactionAmount">
                <span className="Money">$2,453</span>
                <span className="MoneyRate">
                    -11.4 <ArrowDownward className='featuredIcon down'/>
                    </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
             </div>
             
         </div>
            {userhistory}
            {/* {userhistory} */}
         
         </div>
         
    
 
 

     )
 }
 export default Transaction




