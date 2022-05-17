import  Icon  from '@material-ui/core'
import './Widgetsm.css'
import { Visibility } from '@material-ui/icons'
import Vinod from '../Assert/images/vinod.png'
const Widgetsm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={Vinod} alt="vinod" className='widgetSmImg'/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Vinoth </span>
                    <span className="widgetSmUserTitle">Electrician</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Vinod} alt="vinod" className='widgetSmImg'/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Vinoth </span>
                    <span className="widgetSmUserTitle">Electrician</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Vinod} alt="vinod" className='widgetSmImg'/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Vinoth </span>
                    <span className="widgetSmUserTitle">Electrician</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={Vinod} alt="vinod" className='widgetSmImg'/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Vinoth </span>
                    <span className="widgetSmUserTitle">Electrician</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Widgetsm