import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import '../css/Home.css';

function Home() {
    return <>
        <section className="home">
            <div className="title">
                <h1>Pick parts. Build your car. Ride with style.</h1>
            </div>

            <div className="info">
                <p>Find compatible parts with ease and build your car the way you want it!</p>
            </div>
            
            <div className="button">
                <Button
                    component={Link}
                    to="/finder"
                    variant="contained"
                >
                    Find Parts Now
                </Button>
            </div>
        </section>
    </>
}

export default Home;
