import { collection, onSnapshot, query } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { db } from '../firebase/firebase'
import '../styles/Card.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

        const responsive = {
                superLargeDesktop: {
                        // the naming can be any, depends on you.
                        breakpoint: { max: 4000, min: 3000 },
                        items: 5
                },
                desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3
                },
                tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2
                },
                mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1
                }
        };

        const [fruit, setFruit] = useState([]);
        const [vegetable, setVegetable] = useState([]);
        const [meat, setMeat] = useState([]);
        // const [view, setView] = useState(false)
        // const [test, setTest] = useState("SAJAL")

        const navigate = useNavigate();

        const openprofile = (catogory, title) => {
                navigate(`/read/${catogory}/${title}`);
        };


        // const showButton = () => {
        //         setView(true)
        // }

        // const hideButton = () => {
        //         setView(false)
        // }

        useEffect(() => {
                const f = query(collection(db, 'fruit'))
                onSnapshot(f, (querySnapShot) => {
                        console.log("DATA", querySnapShot.docs.map((d) => d.data().title))
                        setFruit(querySnapShot.docs.map(d => d.data()))
                })

                const v = query(collection(db, 'vegetable'))
                onSnapshot(v, (querySnapShot) => {
                        console.log("DATA", querySnapShot.docs.map((d) => d.data().title))
                        setVegetable(querySnapShot.docs.map(d => d.data()))
                })

                const m = query(collection(db, 'meat'))
                onSnapshot(m, (querySnapShot) => {
                        console.log("DATA", querySnapShot.docs.map((d) => d.data().title))
                        setMeat(querySnapShot.docs.map(d => d.data()))
                })
        }, [])

        return (
                <div style={{ width: '100%' }}>
                        <div>
                                <Fade autoplay={true} infinite={true} indicators={false}>

                                        {
                                                fruit.map((key, index) => {
                                                        return (
                                                                <div key={index}
                                                                        className='hero'
                                                                        style={{
                                                                                textAlign: 'center',
                                                                                background: 'gray',
                                                                                // fontSize: '20%',
                                                                                height: '75vh',
                                                                                backgroundImage: `url(${key.img})`,
                                                                                backgroundSize: 'cover',
                                                                                backgroundRepeat: 'no-repeat',
                                                                                // opacity: '0.1'

                                                                        }}
                                                                >
                                                                        {
                                                                                <div

                                                                                        style={{
                                                                                                textAlign: 'left',
                                                                                                marginLeft: '4%',
                                                                                                marginTop: '15%',
                                                                                                // fontSize: '20%',
                                                                                                color: 'white',
                                                                                                // zIndex: '1',
                                                                                                // opacity: '1'
                                                                                        }}
                                                                                >
                                                                                        <h1 className='module line-clamp headingText' style={{
                                                                                                width: '50vw',
                                                                                                textAlign: 'left',
                                                                                                marginLeft: '4%',
                                                                                                marginTop: '5%',
                                                                                                fontSize: '250%',
                                                                                                fontFamily: 'fantasy'
                                                                                        }}>{key.title}</h1>

                                                                                        <p className='module line-clamp headingText' style={{

                                                                                                width: '50vw',
                                                                                                textAlign: 'left',
                                                                                                fontSize: '120%',
                                                                                                color: 'white',
                                                                                                marginLeft: '4%'
                                                                                        }}>
                                                                                                {key.description}
                                                                                        </p>

                                                                                        <Link to={{ pathname: `/read/${key.catogory}/${key.title}` }}>
                                                                                                <button className='button-27' >READ NOW</button>
                                                                                        </Link>
                                                                                </div>
                                                                        }
                                                                </div>

                                                        )
                                                })
                                        }
                                </Fade >

                                {/* <----------FRUIT----------> */}

                                <div>
                                        <div className='centerDiv'>
                                                <p style={{ float: 'left', color: 'whitesmoke', fontFamily: 'fantasy', fontSize: '250%' }}>FRUIT</p>
                                                <Link to={{ pathname: `/viewall/fruit` }}>
                                                        <button className='button-80' style={{ float: 'right' }} >VIEW ALL</button>
                                                </Link>
                                        </div>
                                        <div>

                                                <Carousel
                                                        // partialVisible={true}
                                                        responsive={responsive}
                                                        infinite={true}
                                                        containerClass='cardSize'
                                                        autoPlay={true}
                                                        autoPlaySpeed={1500}
                                                        centerMode={true}
                                                // showDots={true}
                                                // renderButtonGroupOutside={Fade}
                                                >
                                                        {
                                                                fruit.map((key, index) => {
                                                                        return (
                                                                                // <Link to={{ pathname: `/read/${key.title}` }}>
                                                                                <div
                                                                                        key={index}
                                                                                        onClick={() => openprofile(key.catogory, key.title)}
                                                                                        className="test"
                                                                                        style={{
                                                                                                marginLeft: '5%',
                                                                                                textAlign: 'bottom',
                                                                                                background: '#282828',
                                                                                                fontSize: '150%',
                                                                                                height: '50vh',
                                                                                                width: '75%',
                                                                                                // backgroundColor: 'transparent',
                                                                                                backgroundImage: `url(${key.img})`,
                                                                                                backgroundSize: 'cover',
                                                                                                backgroundRepeat: 'no-repeat',
                                                                                                borderRadius: '2%',
                                                                                                alignItems: 'center',
                                                                                                justifyContent: 'center',
                                                                                        }}
                                                                                >
                                                                                        <h1 className='module line-clamp headingText' style={{ fontSize: '125%', fontFamily: 'fantasy', color: 'whitesmoke', margin: '2%', marginLeft: '5%', letterSpacing: '1%' }}>{key.title}</h1>
                                                                                        {/* <h1 className='headingText' style={{ fontSize: '30px', fontFamily: 'fantasy', color: 'whitesmoke', margin: '7px', marginLeft: '10px', letterSpacing: '2px' }}>{key.title}</h1> */}
                                                                                        {
                                                                                                // view &&

                                                                                                // <button className='button-27' >READ NOW</button>

                                                                                        }

                                                                                </div>
                                                                                // </Link>

                                                                        )
                                                                })
                                                        }
                                                </Carousel>;
                                        </div>
                                </div>

                                {/* <----------VEGETABLE----------> */}

                                <div>
                                        <div className='centerDiv'>
                                                <p style={{ float: 'left', color: 'whitesmoke', fontFamily: 'fantasy', fontSize: '40px' }}>VEGETABLE</p>
                                                <Link to={{ pathname: `/viewall/vegetable` }}>
                                                        <button className='button-80' style={{ float: 'right' }} >VIEW ALL</button>
                                                </Link>
                                        </div>
                                        <div>

                                                <Carousel
                                                        // partialVisible={true}
                                                        responsive={responsive}
                                                        infinite={true}
                                                        containerClass='cardSize'
                                                        autoPlay={true}
                                                        autoPlaySpeed={1500}
                                                        centerMode={true}
                                                // showDots={true}
                                                // renderButtonGroupOutside={Fade}
                                                >
                                                        {
                                                                vegetable.map((key, index) => {
                                                                        return (
                                                                                // <Link to={{ pathname: `/read/${key.title}` }}>
                                                                                <div
                                                                                        key={index}
                                                                                        onClick={() => openprofile(key.catogory, key.title)}
                                                                                        className="test"
                                                                                        style={{
                                                                                                marginLeft: '10px',
                                                                                                textAlign: 'bottom',
                                                                                                background: '#282828',
                                                                                                fontSize: '25px',
                                                                                                height: '50vh',
                                                                                                width: '75%',
                                                                                                // backgroundColor: 'transparent',
                                                                                                backgroundImage: `url(${key.img})`,
                                                                                                backgroundSize: 'cover',
                                                                                                backgroundRepeat: 'no-repeat',
                                                                                                borderRadius: '10px',
                                                                                                alignItems: 'center',
                                                                                                justifyContent: 'center',
                                                                                        }}
                                                                                >
                                                                                        <h1 className='module line-clamp headingText' style={{ fontSize: '125%', fontFamily: 'fantasy', color: 'whitesmoke', margin: '2%', marginLeft: '5%', letterSpacing: '1%' }}>{key.title}</h1>
                                                                                        {/* <h1 className='headingText' style={{ fontSize: '30px', fontFamily: 'fantasy', color: 'whitesmoke', margin: '7px', marginLeft: '10px', letterSpacing: '2px' }}>{key.title}</h1> */}
                                                                                        {
                                                                                                // view &&

                                                                                                // <button className='button-27' >READ NOW</button>

                                                                                        }

                                                                                </div>
                                                                                // </Link>

                                                                        )
                                                                })
                                                        }
                                                </Carousel>;
                                        </div>
                                </div>

                                {/* <----------MEAT----------> */}

                                <div>
                                        <div className='centerDiv'>
                                                <p style={{ float: 'left', color: 'whitesmoke', fontFamily: 'fantasy', fontSize: '40px' }}>MEAT</p>
                                                <Link to={{ pathname: `/viewall/meat` }}>
                                                        <button className='button-80' style={{ float: 'right' }} >VIEW ALL</button>
                                                </Link>
                                        </div>
                                        <div>

                                                <Carousel
                                                        // partialVisible={true}
                                                        responsive={responsive}
                                                        infinite={true}
                                                        containerClass='cardSize'
                                                        autoPlay={true}
                                                        autoPlaySpeed={1500}
                                                        centerMode={true}
                                                // showDots={true}
                                                // renderButtonGroupOutside={Fade}
                                                >
                                                        {
                                                                meat.map((key, index) => {
                                                                        return (
                                                                                // <Link to={{ pathname: `/read/${key.title}` }}>
                                                                                <div
                                                                                        key={index}
                                                                                        onClick={() => openprofile(key.catogory, key.title)}
                                                                                        className="test"
                                                                                        style={{
                                                                                                marginLeft: '10px',
                                                                                                textAlign: 'bottom',
                                                                                                background: '#282828',
                                                                                                fontSize: '25px',
                                                                                                height: '50vh',
                                                                                                width: '75%',
                                                                                                // backgroundColor: 'transparent',
                                                                                                backgroundImage: `url(${key.img})`,
                                                                                                backgroundSize: 'cover',
                                                                                                backgroundRepeat: 'no-repeat',
                                                                                                borderRadius: '10px',
                                                                                                alignItems: 'center',
                                                                                                justifyContent: 'center',
                                                                                        }}
                                                                                >
                                                                                        <h1 className='module line-clamp headingText' style={{ fontSize: '125%', fontFamily: 'fantasy', color: 'whitesmoke', margin: '2%', marginLeft: '5%', letterSpacing: '1%' }}>{key.title}</h1>
                                                                                        {
                                                                                                // view &&

                                                                                                // <button className='button-27' >READ NOW</button>

                                                                                        }

                                                                                </div>
                                                                                // </Link>

                                                                        )
                                                                })
                                                        }
                                                </Carousel>;
                                        </div>
                                </div>


                        </div >
                </div >
        )

}

export default Home;