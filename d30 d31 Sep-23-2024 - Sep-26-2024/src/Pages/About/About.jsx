import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <h2>About Us</h2>
            <Link to="/">Home</Link>
        </div>
    );
};

export default About;