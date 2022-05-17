import './Sum.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Sum = () => {
  return (
    <div className='sum'><div class="navbar">
    
    <div class="dropdown">
      <button class="dropbtn">Dropdown 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div> 
  </div>
  
  <h3>Dropdown Menu inside a Navigation Bar</h3>
  <p>Hover over the "Dropdown" link to see the dropdown menu.</p>
  </div>
  )
}

export default Sum