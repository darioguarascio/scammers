const RelatedScammer = ({ scammer }) => {
  return (
    <div>
      <h4 className="text-xl font-medium text-gray-700 my-3">Scammer</h4>
      <div>
        <small className="font-normal text-xs text-gray-500">Codename</small>
        <h2 className="text-sm font-normal text-gray-800">
          {scammer.codename}
        </h2>
      </div>
      {scammer.description && (
        <div>
          <small className="font-normal text-xs text-gray-500">
            Description
          </small>
          <h2 className="text-sm font-normal text-gray-800">
            {scammer.description}
          </h2>
        </div>
      )}
      {scammer.nationality && (
        <div>
          <small className="font-normal text-xs text-gray-500">
            Nationality
          </small>
          <h2 className="text-sm font-normal text-gray-800">
            {scammer.nationality}
          </h2>
        </div>
      )}
      {scammer.sex && (
        <div>
          <small className="font-normal text-xs text-gray-500">Sex</small>
          <h2 className="text-sm font-normal text-gray-800">{scammer.sex}</h2>
        </div>
      )}

      <div>
        <small className="font-normal text-xs text-gray-500">
          Phone Numbers
        </small>
        <h2 className="text-sm font-normal text-gray-800">
          {scammer.phone_numbers && (
            <ul>
              {scammer.phone_numbers.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          )}
        </h2>
      </div>
      <div>
        <small className="font-normal text-xs text-gray-500">Links</small>
        <h2 className="text-sm font-normal text-gray-800">
          <a href={scammer.links} target="_blank">
            {scammer.links}
          </a>
        </h2>
      </div>
    </div>
  );
};

export default RelatedScammer;
