import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1> There is an error with something...</h1>
      <p>{(error as Error).message ?? ""}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-300 p-2 rounded-lg"
      >
        &larr; Go back
      </button>
    </div>
  );
};

export default Error;
