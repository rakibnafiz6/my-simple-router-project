import { useLoaderData } from "react-router-dom";


const Cricket = () => {
    const cricket = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-6">
            
            {
                cricket.map(player => 
                    <div key={player.id} className="card bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/bQcG6f9/images-1.jpg"
      alt="player-img" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{player.name}</h2>
   <p>{player.batting_or_bowling}</p>
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

export default Cricket;