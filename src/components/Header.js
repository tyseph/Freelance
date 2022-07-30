const Header = () => {

        return (
                <div style={styles.hero}>
                        HEADER
                </div>
        )
}

const styles = {
        hero: {
                position: 'relative',
                height: '5vh',
                fontSize: '30px',
                fontFamily: 'fantasy',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'smokewhite',
                /* background-image: url('https://placekitten.com/1200/800'), */
                backgroundSize: 'cover',
        }
}

export default Header;