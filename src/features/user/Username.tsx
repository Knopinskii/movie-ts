import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function Username() {
  const username = useSelector((state: RootState) => state.user.username);
  return <div>{username}</div>;
}

export default Username;
