import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ItemSlider(props) {
  return (
    <div className="slide-item">
      <div className="image-box">
        <img
          src={props.src}
          alt={props.src}
        />
      </div>
      <div className="caption">{props.text}</div>
    </div>
  );
}
