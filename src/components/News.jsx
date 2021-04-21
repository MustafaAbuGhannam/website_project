import NewsCard from "./NewsCard";
import React from 'react';
import '../style/News.css';

const News = ({News})=>{

    return(
        <section className='News'>
            <h2>News</h2>
            {News.map((news)=>{
                return (<React.Fragment key={news.id + 100}><NewsCard news={news} key={news.id}/>
                            <hr key={news.id + 10}/>
                        </React.Fragment>

                    )
            })}
            <a href="http://" target="_blank" rel="noopener noreferrer"> עוד חדשות{'   >'}</a>
        </section>
    );


}

export default News