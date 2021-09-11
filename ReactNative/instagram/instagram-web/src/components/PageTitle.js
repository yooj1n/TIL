import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return (
  <Helmet>
    <title>
    {title} | Instagram
    </title>
    </Helmet>
  );
}


export default PageTitle;