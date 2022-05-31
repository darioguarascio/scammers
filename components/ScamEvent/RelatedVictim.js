const RelatedVictim = ({ victim }) => {
  return (
    <div>
      <h4 className="text-xl font-medium text-gray-700 my-3">Victim</h4>
      <div>
        <small className="font-normal text-xs text-gray-500">Name</small>
        <h2 className="text-sm font-normal text-gray-800">
          {victim.victim_name}
        </h2>
      </div>
      {victim.victim_number && (
        <div>
          <small className="font-normal text-xs text-gray-500">Number</small>
          <h2 className="text-sm font-normal text-gray-800">
            {victim.victim_number}
          </h2>
        </div>
      )}
      {victim.amount && (
        <div>
          <small className="font-normal text-xs text-gray-500">Amount</small>
          <h2 className="text-sm font-normal text-gray-800">
            € {victim.amount}
          </h2>
        </div>
      )}
      {victim.victim_email && (
        <div>
          <small className="font-normal text-xs text-gray-500">Email</small>
          <h2 className="text-sm font-normal text-gray-800">
            {victim.victim_email}
          </h2>
        </div>
      )}
      {victim.victim_sex && (
        <div>
          <small className="font-normal text-xs text-gray-500">Sex</small>
          <h2 className="text-sm font-normal text-gray-800">
            {victim.victim_sex}
          </h2>
        </div>
      )}
      {victim.victim_nationality && (
        <div>
          <small className="font-normal text-xs text-gray-500">
            Nationality
          </small>
          <h2 className="text-sm font-normal text-gray-800">
            {victim.victim_nationality}
          </h2>
        </div>
      )}
      {victim.victim_age && (
        <div>
          <small className="font-normal text-xs text-gray-500">Age</small>
          <h2 className="text-sm font-normal text-gray-800">
            {victim.victim_age}
          </h2>
        </div>
      )}
      {victim.victim_location && (
        <div>
          <small className="font-normal text-xs text-gray-500">Location</small>
          <h2 className="text-sm font-normal text-gray-800">
            {victim.victim_location}
          </h2>
        </div>
      )}
      {victim.reported_to_police && (
        <div>
          <h2 className="text-sm font-normal text-gray-800">
            Reported To Police
          </h2>
        </div>
      )}
    </div>
  );
};

export default RelatedVictim;
