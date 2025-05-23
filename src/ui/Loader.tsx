import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center  backdrop-blur-sm bg-opacity-30 z-50">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
}

export default Loader;
