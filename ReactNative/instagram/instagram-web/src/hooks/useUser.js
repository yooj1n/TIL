import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../apollo";

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

function useUser() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data, error } = useQuery(ME_QUERY, {
    skip: !isLoggedIn, //사용자가 Local storage의 토큰을 통해 로그인하지 않은 경우에는 이 쿼리를 실행하지 않는다.
  });
  console.log(data, error);
  return;
}
export default useUser;