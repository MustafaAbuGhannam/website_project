/** @format */
import '../style/Centers.css';
import Center from './Center';
import { useState } from 'react';
import React from 'react';
const Centers = ({ Cent }) => {
  /************************************************************** */
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });
  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }
  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);
  /********************************************************************** */
  const [Centerr, setCenteer] = useState({
    firstone: 1,
    secondone: 2,
  });
  let cen = Cent;
  let first = Centerr.firstone;
  let second = Centerr.secondone;
  function getCenter() {
    cen = Cent;
    if (windowSize.width < 800) {
      let lastindex;
      lastindex = cen.filter((act) => act.id === Centerr.firstone);
      let firstindexinlast = cen.filter((act) => act.id === Centerr.secondone);
      lastindex = [...lastindex, ...firstindexinlast];
      return lastindex;
    }
    return cen;
  }

  function plusCenter(n) {
    first = Centerr.firstone + n;
    second = Centerr.secondone + n;
    if (first > Object.keys(cen).length) {
      first = 1;
    }
    if (second > Object.keys(cen).length) {
      second = 1;
    }
    if (first <= 0) {
      first = Object.keys(cen).length;
    }
    if (second <= 0) {
      second = Object.keys(cen).length;
    }
    setCenteer({ firstone: first, secondone: second });
    getCenter();

    return n;
  }
  function minousCenter(n) {
    first = Centerr.firstone + n;
    second = Centerr.secondone + n;
    if (first > Object.keys(cen).length) {
      first = 1;
    }
    if (second > Object.keys(cen).length) {
      second = 1;
    }

    setCenteer({ firstone: first, secondone: second });
    getCenter();
  }

  return (
    <section id='m4' className='Center_Container'>
      <h2 id='m14'> המרכז שלנו</h2>
      <section className='Center_row'>
        {getCenter().map((cen) => {
          return <Center key={cen.id} CENTER={cen} />;
        })}
      </section>
      <button className='prev_Center' onClick={() => minousCenter(1)}>
        &#10095;
      </button>
      <button className='next_Center' onClick={() => plusCenter(-1)}>
        &#10094;
      </button>
    </section>
  );
};

export default Centers;
