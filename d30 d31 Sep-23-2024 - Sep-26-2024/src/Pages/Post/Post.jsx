import { useQuery } from "@tanstack/react-query";
import PostCompo from "../../Components/PostCompo/PostCompo";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";

const Post = () => {
    const { data, isLoading, isFetched } = useQuery({
        queryKey: ["post"],
        queryFn: async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return res.data;
        }
    });

    if (isLoading) {
        return (
            <Loading />
        );
    }

    if (isFetched) {
        return (<div className="container mx-auto grid md:grid-cols-3 gap-4">
            {data.map(post => (
                <PostCompo key={post.id} post={post} />
            ))}
        </div>
        )
    }
};

export default Post;