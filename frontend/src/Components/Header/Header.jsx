

import React from 'react';
import Spalshscreen from '../../assets/images/Spalshscreen.png'
const Header = () => {
    return <header className='header flex items-center'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                {/* ====== logo ====== */}
                <div>
                    <img src={Spalshscreen} alt="" />
                </div>
            </div>
        </div>

    </header>
};
export default Header