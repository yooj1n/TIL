import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import routes from "./routes";

const TOKEN = "token"

//새로고침을 해도 TOKEN의 유무에 따라 로그인 상태를 유지시킬 수 있음.
export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

//token을 저장하는 방법
export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
}

export const logUserOut = (history) => {
  localStorage.removeItem(TOKEN);
  history?.replace();
  window.location.reload();

}
export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});