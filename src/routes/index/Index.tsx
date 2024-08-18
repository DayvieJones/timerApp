import Button from "../../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Index.css";

function Index() {
  const navigate = useNavigate();

  const handleNavigateToApp = () => {
    navigate("main");
  };
  return (
    <div className="indexPage">
      <h2 className="indexPageText">Wähle eine Seite</h2>
      <br />
      <Link to="./NoMatch">
        <button>Hier</button>
      </Link>
      <Button
        buttonContent="Timer App"
        handleOnClickEvent={handleNavigateToApp}
      />
    </div>
  );
}

export default Index;
