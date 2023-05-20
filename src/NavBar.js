import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function NavBar(){
    return(
        <>
        <nav class="navbar navbar-expand-sm sticky-top bg-dark  border-bottom">
      <div class="container-fluid">
      <Link className="navbar-brand text-light" to="/">Vidbox</Link>  
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon ">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
</svg>
          </span>
        </button>
        
        <div class="collapse navbar-collapse custom-menu" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
            <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link text-light" to="/contact">Contact</Link> 
            </li>
           
          </ul>
        </div>
      </div>
    </nav>   
    
        </>
       
    )
    }


