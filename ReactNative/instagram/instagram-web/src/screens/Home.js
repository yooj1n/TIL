import { gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Photo from "../components/feed/Photo";

const FEED_QUERY = gql`
query seeFeed {
  seeFeed {
    id
    user {
      username
      avatar
    }
    file
    caption
    likes
    comments
    createdAt
    isMine
    isLiked
    }
  }
`;


function Home() {
  const {data} = useQuery(FEED_QUERY);
  const history = useHistory();
  return (
<div>
      {data?.seeFeed?.map((photo) => (
         <Photo key={photo.id} {...photo} />
      ))}
    </div>

  )
}

export default Home;