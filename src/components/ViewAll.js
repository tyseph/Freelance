import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from '../firebase/firebase'
// import '../styles/Read.css'
import '../styles/Viewall.css'



const ReadingPage = () => {

        let params = useParams();
        const navigate = useNavigate();
        // console.log(params)

        const [info, setInfo] = useState([]);

        useEffect(() => {
                const f = query(collection(db, params.catogory))
                onSnapshot(f, (querySnapShot) => {
                        // console.log("DATA", querySnapShot.docs.map((d) => d.data().title))
                        setInfo(querySnapShot.docs.map(d => d.data()))
                })
        }, [])

        const openprofile = (catogory, title) => {
                navigate(`/read/${catogory}/${title}`);
        };

        return (
                <>
                        <center>

                                <p style={{ color: 'whitesmoke', fontFamily: 'fantasy', fontSize: '250%', textTransform: 'uppercase', marginTop: '2%' }}>{params.catogory}</p>
                                <div onClick={() => navigate(-1)} className="button-28">X</div>
                        </center>
                        <div className="container">
                                {
                                        info.map((key, index) => {
                                                return (
                                                        <div key={index} onClick={() => openprofile(key.catogory, key.title)} className="card">
                                                                <div className="card__image">
                                                                        <img style={{ width: '100%', height: '100%' }} src={key.img} />
                                                                </div>
                                                                <div className="card__copy">
                                                                        <h1 className="line-clamp-2 module" style={{ fontFamily: 'fantasy', fontSize: '200%' }}>{key.title}</h1>
                                                                        {/* <h2>{key.catogory}</h2> */}
                                                                        <p className='module line-clamp-2'>
                                                                                {key.description}
                                                                        </p>
                                                                </div>
                                                        </div>
                                                )
                                        })
                                }
                        </div>
                </>
        )
}

export default ReadingPage;