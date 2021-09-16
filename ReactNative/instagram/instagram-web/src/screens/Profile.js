import { useParams } from "react-router-dom";

function Profile(){
  const params = useParams();
  console.log(params);
  return "Profile"
}

export default Profile;