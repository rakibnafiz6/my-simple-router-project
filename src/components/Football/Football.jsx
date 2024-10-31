import { useLoaderData } from "react-router-dom";


const Football = () => {
    const football = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-6">
            
            {
                football.map(player => 
                    <div key={player.id} className="card bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/McnLZPn/Neymar.jpg" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{player.name}</h2>
    <p>{player.skill}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
                )
            }
        </div>
    );
};

export default Football;