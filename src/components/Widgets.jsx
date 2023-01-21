import React from 'react'
import '../styles/widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
    const newsArticle=(heading,subtitles)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>

            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitles}</p>
            </div>
        </div>
    )

    


    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn news</h2>
                <InfoIcon/>
            </div>
            {newsArticle("prabhu nath","top news-9099 readers")}
            {newsArticle("twitter break ","elon musk -300 readers")}
            {newsArticle("bitcoin break $22","crypto-800 readers")}
            {newsArticle("is redux too good ?","code-123 readers")}
            {newsArticle("isro launches pslv","top news -6503 readers")}
        </div>
    )
}

export default Widgets