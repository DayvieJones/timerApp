import { useParams } from "react-router-dom";

function FirstRoute() {
  const { itemID } = useParams();

  return <div>First Route {itemID}</div>;
}

export default FirstRoute;
