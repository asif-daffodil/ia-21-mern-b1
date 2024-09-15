
const TeamMember = ({userName, description, devImg}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={devImg}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{userName}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;