import './servicethree.css'
import One from '../../assets/1.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
    {
      url: '/../_2.jpg',
      caption: 'LOGO ONE 1'
    },
    {
      url: 'images/slide_3.jpg',
      caption: 'LOGO 2'
    },
    {
      url: 'images/slide_4.jpg',
      caption: 'LOGO 3'
    },
    {
      url: 'images/slide_4.jpg',
      caption: 'LOGO 4'
    },
  ];

export default function Services() {
  
    return (
        <>
        
        <div className="section">
    <img src={One} className="section-img" alt="..." />
    <div className="card-img-overlay container">
            <div className="top">
            <div className="diver">LAHSFDTB AJDUFK</div>
            <p className="section-text text-first">L is a wider card with supporting text
            his is a wider card with supporting text below asthis is a wider card
              with supporting text this is a wider card with supporting text with 
              supporting text this is a wider card with supporting text anatural lead-in text anatural lead-in</p>
            </div>
        
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>


    </div>
    </div>

        </>
    )}
       





