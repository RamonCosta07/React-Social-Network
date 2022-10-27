import "./PhotoItem.css";
import { uploads } from "../utils/config";
import { Link } from "react-router-dom";

function PhotoItem({ photo }) {
  return (
    <div id='photo' className="photo-item">
      {photo.image && (
        <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
      )}
      <h2>{photo.title}</h2>
      <p className="photo-author">
        Postado por:{" "}
        <span>
          {" "}
          <Link to={`/users/${photo.userId}`}>{photo.userName} </Link>{" "}
        </span>
      </p>
    </div>
  );
}

export default PhotoItem;
