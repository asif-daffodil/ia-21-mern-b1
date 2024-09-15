import TeamMember from "./TeamMember";
import devImg from "../../assets/images/developer3.jpg"

const OurTeam = () => {
    const userArr = [
        {
            index: 1,
            userName: "Intamam",
            description: "Intemam is not a bad boy",
            devImg: devImg
        },
        {
            index: 2,
            userName: "Intamam",
            description: "Intemam is not a bad boy",
            devImg: devImg
        },
        {
            index: 3,
            userName: "Intamam",
            description: "Intemam is not a bad boy",
            devImg: devImg
        }
    ];

    return (
        <div className="container mx-auto my-20">
            <h2 className="text-6xl font-extralight text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-4 my-6">
                {userArr.map((user) => (
                    <TeamMember
                        key={user.index}
                        userName={user.userName}
                        description={user.description}
                        devImg={user.devImg}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurTeam;