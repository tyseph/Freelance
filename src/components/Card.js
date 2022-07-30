import '../styles/Viewall.css'

const Card = (props) => {

        // console.log(props)
        const info = props.item
        return (
                <div className="card">
                        <div className="card__image">
                                <img style={{ width: '100%', height: '100%' }} src={info.img} />
                        </div>
                        <div className="card__copy">
                                <h1 style={{ fontFamily: 'fantasy', fontSize: '30px' }}>{info.title}</h1>
                                <h2>{info.catogory}</h2>
                                <p className='module line-clamp'>
                                        {info.description}
                                </p>
                        </div>
                </div>
        )
}

export default Card;