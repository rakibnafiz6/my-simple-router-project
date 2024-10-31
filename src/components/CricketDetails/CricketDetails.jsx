import { Link, useLoaderData } from "react-router-dom";


const CricketDetails = () => {
    const playerDetails = useLoaderData();
    const {phone, id, email, website} = playerDetails;
    return (
        <div className="text-center w-full mt-10 bg-blue-400 p-10">
            <p>playerId: {id}</p>
            <p>phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
            <Link to={-1}><button className="bg-blue-800">Go Back</button></Link>
        </div>
    );
};

export default CricketDetails;