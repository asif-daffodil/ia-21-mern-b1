import { useNavigate, useSearchParams } from "react-router-dom";

const User = () => {
    // get ?name=shad from URL
    let [name, setName]  = useSearchParams();
    const navigate = useNavigate();
    // function to change URL
    const handleShad = () => {
        setName({name: "Shad"});
    }

    const handleNafiul = () => {
        setName({name: "Nafiul"});
    }

    const handleRakibul = () => {
        navigate("/user?name=Rakibul");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {(name ? (
                    <h1 className="text-center">User Name is {name.get('name')}</h1>
                    ) : ( 
                    <h1 className="text-center">User Name is not Available</h1>
                    ))}
                </div>
                <div className="row bg-primary text-white text-center py-5">
                    <div className="col">
                        <h1>Welcome to My Website</h1>
                        <p>Your go-to source for awesome content!</p>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col text-center">
                        <h2>User</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.</p>
                        <button className="btn btn-dark me-2" onClick={handleShad}>Shad</button>
                        <button className="btn btn-primary me-2" onClick={handleNafiul}>Nafiul</button>
                        <button className="btn btn-warning" onClick={handleRakibul}>Rakibul</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;