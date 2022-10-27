import "./LikeContainer.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";

function LikeContainer({ photo, user, handleLike }) {
  return (
    <div className="like">
      {photo.likes && user && (
        <>
          {photo.likes.includes(user._id) ? (
            <BsHeartFill />
          ) : (
            <BsHeart onClick={() => handleLike(photo)} />
          )}
          &nbsp;
          <p>{photo.likes.length} like(s)</p>
        </>
      )}
    </div>
  );
}

export default LikeContainer;
