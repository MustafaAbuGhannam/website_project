/** @format */

import DepListPiece from './DepListPiece';
import '../style/ListOfDep.css';
import { dataBase } from '../config/firebase';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import SlideShow from './SlideShow';

const ListOfDep = ({ departmentName }) => {
  const history = useHistory();
  const [list, setList] = useState([]);

  useEffect(() => {
    const collectionRef = dataBase.collection('Departments');

    const doc = collectionRef.doc(departmentName);

    doc.get().then((item) => {
      const dataToSet = [];
      item.data().Deps.forEach((item, index) => {
        dataToSet[index] = { text: item, url: index };
      });
      setList(dataToSet);
    });
  }, [departmentName]);

  return (
    <section className='Maincontener'>
      <h1>{departmentName}</h1>
      <SlideShow collection={'Departments/' + departmentName + '/slideShow'} />

      <div className='titleText'>
        <p>מחלקות יחידות ושירותים בקמפוס {departmentName}</p>
      </div>
      <div className='Brancheskk'>
        {list.map((item, index) => {
          return <DepListPiece bbranch={item} key={index} />;
        })}
      </div>
      <div className='HowWeCanComeDiv'>
        <button
          className='HowWeCanComeButton'
          onClick={() => {
            if (departmentName === 'כפר שאול') {
              history.push('./map1');
            }
            if (departmentName === 'איתנים') {
              history.push('./map');
            } else {
              history.push('./map1');
            }
          }}
          id='HowWeCanComeButton'>
          {' '}
          איך מגיעים
        </button>
      </div>
    </section>
  );
};

export default ListOfDep;
