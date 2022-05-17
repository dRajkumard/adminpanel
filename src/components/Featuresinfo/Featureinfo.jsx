import './Featureinfo.css'
import {ArrowDownward,ArrowUpward} from '@material-ui/icons'
const Featureinfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,453</span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownward className='featuredIcon down'/>
                    </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,453</span>
                <span className="featuredMoneyRate">
                    -1.4 <ArrowDownward className='featuredIcon down'/>
                    </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,453</span>
                <span className="featuredMoneyRate">
                    2.4 <ArrowUpward className='featuredIcon'/>
                    </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default Featureinfo