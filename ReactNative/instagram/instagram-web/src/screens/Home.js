import { useHistory } from "react-router-dom";
import { logUserOut } from "../apollo";

function Home() {
  const history = useHistory();
  return (
    <div>
  <h1>I DID IT~!!!</h1>
  <button onClick={() => logUserOut(history)}> Log out now</button>
  </div>
  )
}

export default Home;