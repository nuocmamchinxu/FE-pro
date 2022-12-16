import videoHomePage from '../../assets/videos/video-homepage.mp4'
const HomePage = () => {
    return (

        <div className="homepage-container">

            <video autoPlay muted loop width="700px" height="500px" >



                <source
                    src={videoHomePage} type="video/mp4" />

            </video>
            <div className='homepage-content'>
                <div>
                    <h2>There is the better way to ask</h2>
                </div>
                <div>
                    <p> you don't want to make a boring form. And your audience won't answer one.
                        Create a typeform instead—and make everyone happy.</p>
                </div>
                <div>
                    <button className='btn-vd'>Get started-- it's free</button>
                </div>
            </div>
        </div>

    )
}
export default HomePage;