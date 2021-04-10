
import SlideShow from "./SlideShow"
import Events from "./Events"
import News from './News'
import SideWidget from './SideWidget'
import img1 from '../imges/newsimg1.jpg';
import img2 from '../imges/newsimg2.jpg';
const HomePage = ()=>{

    const news = [{
        id: 1,
        title: 'גאווה ישראלית – שנה שלישית ברציפות',
        brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
        img: `${process.env.PUBLIC_URL}/imges/newsimg2.jpg`
      },
      {
        id: 2,
        title: 'גאווה ישראלית – שנה שלישית ברציפות',
        brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
        img: `${process.env.PUBLIC_URL}/imges/newsimg3.jpg`
      },
      {
        id: 3,
        title: 'גאווה ישראלית – שנה שלישית ברציפות',
        brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
        img: `${process.env.PUBLIC_URL}/imges/News1.jpeg`
      
      },
      ]

    const events = [{
        id:'1',
        CardTitle:'firstone',
        CardSubtitle:'first',
        date:'2thFeb',
        body:'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין? ',
        img:`${process.env.PUBLIC_URL}/imges/event1.jpg`,
      },
      {
        id:'2',
        CardTitle:'Secondone',
        CardSubtitle:'Second',
        date:'3thFeb',
        body:'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין?',
        img:`${process.env.PUBLIC_URL}/imges/event2.jpg`,
      },{
        id:'3',
        CardTitle:'thirdone',
        CardSubtitle:'third',
        date:'3thFeb',
        body:'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין?',
        img:`${process.env.PUBLIC_URL}/imges/event3.jpg`
      }]

    return(
        <>
            
            <SlideShow/>
            <section className='MainSection'>
                <section className="NewsAndEvents">
                    <News News={news}/>
                    <Events events={events}/>
                </section>
                <section className='Ads'>
                        <SideWidget photo={img1}/>
                        <SideWidget photo={img2}/>
                        <SideWidget photo={img1}/>
                        <SideWidget photo={img2}/>

                </section>
            </section>
        </>
    );

}

export default HomePage;