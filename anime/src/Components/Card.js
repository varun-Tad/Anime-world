import { useDrag } from "react-dnd";
import { PostTypes } from "../utils/postType";
import "./components.css";

export const PostCard = ({ navigateHandler, post }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: post,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="card-container" onClick={() => navigateHandler(post)}>
      <div>
        <img ref={drag} src={post.images?.jpg?.image_url} alt="anime" />
      </div>
      <div className="card-title">
        <h2>{post.title}</h2>
        <p>{post.rating}</p>
      </div>
    </div>
  );
};
