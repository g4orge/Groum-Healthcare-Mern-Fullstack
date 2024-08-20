

import { useEffect, useRe } from 'react';
import userImg from '../../assets/images/avatar-icon.webp'
import {NavLink,link} from 'react-router-dom';

const navLinks =[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/doctors',
        display:'Find a Doctor'
    },
    {
        path:'/servics',
        display:'Services'
    },
    {
        path:'/contact',
        display:'Contact'
    },
]
const Header = () => {
    return(
        <header className='header flex items-center'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                {/* ====== logo ====== */}
                    <div>
                        <img src={Spalshscreen} alt="" />
                    </div>
                    <div className='navigation'>
                        <ul className='menu flex items-center gap=[2.7rem]'>
                            {
                                navLinks.map((link,index)=><li key = {index}>
                                    <NavLink to ={link.path} className={navClass=> navClass.isActive? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'

                                    }
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>)
                            }
                            
                        </ul>
                    </div>

                    {/* ====== nav right ====== */}
                    <div className= 'flex items-center gap-4'>
                        <div>
                            <link to='/'>
                            <figure className='w-[35px] h-[35px] rounded-full'>
                                <img src={userImg} alt='' />

                            </figure>
                            </link>
                        </div>

                    </div>

                </div>
            </div>

        </header>
    );
};
export default Header