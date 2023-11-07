/* eslint-disable react/prop-types */


const Contributor = ({contributor}) => {
    return (
        <div className="card bg-orange-300 shadow-xl">
        <figure>
        <div className="avatar">
  <div className="w-28 mask mask-squircle">
    <img src={contributor.img} />
  </div>
</div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{contributor.name}</h2>
          <p className=""><span className="font-bold"> Food-Contribution: </span>{contributor.food_contributions}</p>
             <p><span className="font-bold">Phone: </span> {contributor.phone}</p>
        </div>
      </div>
    );
};

export default Contributor;