import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const SinglePost = () => {
    const { id } = useParams();
    const {data, isLoading, isFetched} = useQuery({
        queryKey: ["singlePost", id],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:3000/posts/${id}`);
            return response.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isFetched) {
        return (
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-gray-700 text-base">{data.views}</p>
            </div>
        );
    }
};

export default SinglePost;