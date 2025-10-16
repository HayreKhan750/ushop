// src/components/menu-item/menu-item.jsx
import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

export function MenuItem({ title, imageUrl, size, linkUrl }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(linkUrl);
  };

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}
