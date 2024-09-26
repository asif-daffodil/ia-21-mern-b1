
const PostCompo = ({post}) => {
    return (
        <div className="border p-3 shadow rounded">
            <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCompo;