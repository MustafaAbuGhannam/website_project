/** @format */

import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import MobNav from './MobNav';
import { useState } from 'react';
import '../style/MobHeader.css';
import Accessibility from './Accessibility/Accessibility';

const MobHeader = () => {
  const [toogle, setToogle] = useState(false);

  const toogleHandeler = () => {
    let Nav = Array.from(document.getElementsByClassName('MobNav'));
    Nav[0].classList.toggle('active');
    setToogle(!toogle);
  };

  return (
    <>
      <div className='MoblieHeader'>
        <button onClick={toogleHandeler}>
          {' '}
          {toogle ? (
            <IoClose size='40px' color='#ea3d84' />
          ) : (
            <AiOutlineMenu size='30px' color='#151e4d' />
          )}{' '}
        </button>
        <img src={`${process.env.PUBLIC_URL}/imges/LOGONEW.jpg`} alt='' />
        <Accessibility />
        {/* <a href="/">
        <AiFillHome size='30px' color='#151e4d' />
        </a> */}
      </div>
      <MobNav />
    </>
  );
};

export default MobHeader;
