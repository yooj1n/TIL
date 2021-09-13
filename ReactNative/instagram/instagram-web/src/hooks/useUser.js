import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../apollo";

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar); //user가 로그인했는지 확인 (리액트 상에서)
  const { data } = useQuery(ME_QUERY, {
    fetchPolicy: "no-cache",
    skip: !hasToken, //사용자가 Local storage의 토큰을 통해 로그인하지 않은 경우에는 이 쿼리를 실행하지 않는다.
  });
  //useEffect는 hook이 마운트되면 한 번 실행되고, [데이터]가 변경될 때마다 실행
  console.log(data);
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);
  return;
}
export default useUser;
