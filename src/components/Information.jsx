/** @format */

import Branches from './Branches';
import ContactUs from './ContactUs';
import '../style/Information.css';
const Information = () => {
  const contact_details = {
    id: 1,
    moked_num: '2786*',
    address: 'כתובת: בית חולים כפר שאול - רחוב הרב רפאל קצנלבוגן 101, ירושלים',
    address2:'בית חולים איתנים - דואר נע מטה יהודה',
    email: 'p.tzibur@moh.gov.il',
    tel: '1599-50-60-80',
    fax: '025554488',
    time: 'מענה טלפוני:  16:00 - 08:00',
    language: 'שפות מענה עברית, אנגלית ורוסית',
  };
  return (
    <section className='Information'>
      <section className='columnBranches'>
        <h2 id="m2">מחלקות</h2>
        <Branches />
      </section>
      <section className='columnContactUs'>
        <h2>צור קשר</h2>
        <ContactUs details={contact_details} />
      </section>
    </section>
  );
};

export default Information;
