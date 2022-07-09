import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }> 
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {/* <li className="nav-item active">
          <a className="nav-link" href="/speechtotext">Speech</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>  */}
      </ul>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success mx-2" type="submit">Search</button>
      </form> */}
       
       {/* This is for forming different colors pallates..... */}
      {/* <div className='d-flex'>
        <button className='bg-primary rounded mx-2' type='button' onClick={()=>{props.toggleMode('primary')}} style={{height:"20px",width:"20px", cursor:"pointer"}}> </button>
        <button className='bg-danger rounded mx-2' type='button' onClick={()=>{props.toggleMode('danger')}} style={{height:"20px",width:"20px", cursor:"pointer"}}> </button>
        <button className='bg-success rounded mx-2' type='button' onClick={()=>{props.toggleMode('success')}} style={{height:"20px",width:"20px", cursor:"pointer"}}> </button>
        <button className='bg-warning rounded mx-2' type='button' onClick={()=>{props.toggleMode('warning')}} style={{height:"20px",width:"20px", cursor:"pointer"}}> </button>

        </div> */}
<form action="">
<div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" html="flexSwitchCheckDefault">{props.btntext}</label>
</div>
</form>
    </div>
  </nav>
    
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired, home:PropTypes.string.isRequired}

Navbar.defaultProps = {
  title:"I CAN",
  home:"Do it"
}
