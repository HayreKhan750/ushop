import Directory from "../../components/directory/directory";
import { Header } from "../../components/header/header";
import "./homepage.styles.scss";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
