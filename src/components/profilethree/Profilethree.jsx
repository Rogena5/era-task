import './profilethree.css'
import One from "../../assets/1.jpg"



export default function profile() {
    return (
        <>
        <div className="section">
        <img src={One} className="section-img" alt="..." />
        <div className="card-img-overlay">
        <div className="row container">
        <div className="logo col-lg-7 col-md-12">
        <img src="" alt=" your logo here"/>
        </div>
        <div className="padges col-lg-5 col-md-12">
            <h1 className="lighter">LOREM IPSUM</h1>
            <div className="padges">
            <div className="m-4">
            <p><span class="badge py-2 px-4">1999</span> lorem ipsum is simply dummy text of the printing and typesetting
                lorem ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            
            </div>
            <div className="m-4">
            <p><span class="badge py-2 px-4">1999</span> lorem ipsum is simply dummy text of the printing and typesetting
                lorem ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className=" m-4">
            <p><span class="badge py-2 px-4">1960</span> lorem ipsum is simply dummy text of the printing and typesetting
            lorem ipsum is simply dummy text of the printing and typesetting</p>
            </div>
        </div>
        </div> 
        </div>

        </div>
       
        </>
    )}