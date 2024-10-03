import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const AllPost = () => {
    const { data, isLoading, isFetched } = useQuery({
        queryKey: ["allPost"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:3000/posts");
            return response.data;
        },
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isFetched) {
        return (
            <div className="container mx-auto grid md:grid-cols-3 gap-3 my-4">
                {data.map(post => (
                    <div key={post.id} className="border rounded p-3 shadow">
                        <h2 className="uppercase font-bold">{post.title}</h2>
                        <p>{post.views}</p>
                        <Link to={`/post/${post.id}`} className="text-blue-600">Read More</Link>
                    </div>
                )
                )}
            </div>
        );
    }
};

export default AllPost;