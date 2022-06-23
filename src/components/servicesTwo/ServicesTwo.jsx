import './servicestwo.css'
import One from '../../assets/1.jpg'
import Three from '../../assets/3.jpg'



export default function Services() {
  
    return (
        <>
            <div className="section">
            <img src={One} className="section-img" alt="..." />
    <div className="card-img-overlay servicestwo">
                <h5>loerm spum</h5>
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-4" >
                                <img src={Three} alt="..." />
                            </div>
                            <div className="orange col-lg-4" >
                            <h5>lorem</h5>
                            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>
                            </div>
                            <div className=" col-lg-4" >
                            <img src={Three} alt="..." />
                            </div>
                            
                        </div>
                    </div>
            </div>
            </div>
    </>
    )}