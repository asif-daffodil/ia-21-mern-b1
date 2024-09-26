import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useHelmet from "../../Hooks/useHelmet";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
    const msg = useHelmet("Home Page 2");
    useEffect(() => {
        (async () => {
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
                console.log(res.data);
            }catch(err){
                console.log(err);
            }
        })();
    }, []);
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <h2>{msg}</h2>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Home;