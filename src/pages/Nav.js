import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <ul className="nav">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/subcategory">Sub Category</Link>
                </li>
                <li>
                     <Link to="/test">Test</Link>
                </li>
                <li>
                     <Link to="/mainCategory">Main Category</Link>
                </li>
                <li>
                     <Link to="/pagination">Pagination</Link>
                </li>
                <li>
                     <Link to="/region">Region</Link>
                </li>
            </ul>    
        </div>
    )
}

export default Nav
