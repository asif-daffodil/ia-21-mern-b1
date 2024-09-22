import { useNavigate, useParams } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/about/Asif%20Abir");
    }

    const { name } = useParams();
    return (
        <>
            {name ? (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">About Us</h1>
                        </div>
                        <div className="row bg-primary text-white text-center py-5">
                            <div className="col">
                                <h1>Welcome to My Website</h1>
                                <p>Your go-to source for awesome content!</p>
                                <p>My name is {name}</p>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col text-center">
                                <h2>About Us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center">About Us</h1>
                            </div>
                            <div className="row bg-primary text-white text-center py-5">
                                <div className="col">
                                    <h1>Welcome to My Website</h1>
                                    <p>Your go-to source for awesome content!</p>
                                    <button className="btn btn-dark" onClick={handleClick}>Show My name</button>
                                </div>
                            </div>
                            <div className="row py-5">
                                <div className="col text-center">
                                    <h2>About Us</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default About;