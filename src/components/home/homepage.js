import videoHomePage from '../../assets/videos/video-homepage.mp4'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HomePage = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    return (

        <div className="homepage-container">

            <video autoPlay muted loop width="700px" height="500px" >



                <source
                    src={videoHomePage} type="video/mp4" />

            </video>
            <div className='homepage-content'>
                <div className='tt1'>
                    <h2>There is the better way to ask</h2>
                </div>
                <div className='tt2'>
                    <p> you don't want to make a boring form. And your audience won't answer one.
                        Create a typeform instead—and make everyone happy.</p>
                </div>
                <div className='tt3'>
                    {isAuthenticated === false ?
                        <button className='btn-vd'
                            onClick={() => navigate('/login')}
                        >Get started-- it's free</button>
                        :
                        <button className='btn-vd'
                            onClick={() => navigate('/users')}
                        >
                            Start Quiz ?
                        </button>
                    }

                </div>
            </div>
        </div>

    )
}
export default HomePage;