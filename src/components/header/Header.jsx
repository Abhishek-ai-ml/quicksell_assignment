import React, { useState } from 'react'
import './header.css'
import { VscSettings } from 'react-icons/vsc'
import FilterModal from '../filterModal/FilterModal';



const Header = ({setGrouping, setFiltering}) => {
    const [toggle, setToggle] = useState(false);
    console.log("Toggle", toggle);
    
  return (
    <div className='headerContainer'>
      <div className='header'>
            <div className='displayButton' onClick={() => setToggle(!toggle)}>
                <div className='displayButtonIcon'>
                    <VscSettings color='black'/>
                </div>

                <div>Display</div>
            </div>
      </div>

      <div className='filter'>
        {
            toggle && <FilterModal setGrouping={setGrouping} setFiltering={setFiltering}/>
        }
      </div>
    </div>
  )
}

export default Header
