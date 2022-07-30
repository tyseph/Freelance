import { useEffect, useState } from "react";
import { BrowserRouter, Link, Router, useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'
import '../styles/Read.css'



const ReadingPage = () => {

        let params = useParams();
        const navigate = useNavigate();
        console.log(params)

        const [info, setInfo] = useState([]);

        useEffect(() => {
                const docRef = doc(db, params.catogory, params.title);
                const docSnap = getDoc(doc(db, params.catogory, params.title)).then(docSnap => {
                        if (docSnap.exists()) {
                                console.log(docSnap.data())
                                setInfo(docSnap.data())
                        }
                        else {
                                alert("LOL")
                        }
                })
        }, [])
        return (
                <div>
                        <div onClick={() => navigate(-1)} className="button-28">X</div>
                        {/* <img src={info.img} style={{ height: '55vh', width: '100%', opacity: '0.75' }} /> */}
                        <div
                                className="hero"
                                style={{
                                        backgroundImage: `url(${info.img})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        height: '40vh'

                                }}>
                                <div

                                        style={{
                                                width: '80%',
                                                textAlign: 'center',
                                                fontSize: '250%',
                                                color: 'white',
                                                marginLeft: '7%',
                                                marginTop: '7%'
                                                // zIndex: '1',
                                                // opacity: '1'
                                        }}
                                >
                                        <h1 className='module line-clamp headingText' style={{
                                                textAlign: 'center',
                                                fontSize: '75%',
                                                fontFamily: 'fantasy'
                                        }}>{info.title}</h1>

                                        <p className='module line-clamp headingText' style={{
                                                textAlign: 'center',
                                                fontSize: '50%',
                                                color: 'white',
                                        }}>
                                                {info.catogory}
                                        </p>
                                </div>
                        </div>
                        <div>
                                <p style={{ whiteSpace: 'pre-wrap', padding: '3%', color: 'whitesmoke', fontSize: '18px' }}>
                                        {info.description}
                                </p>
                        </div>
                </div>
        )
}

export default ReadingPage;