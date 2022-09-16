import "./components.css";

export const Card = ({ post }) => {
  return (
    <div className="card-container">
      <div>
        <img src={post.images?.jpg?.image_url} alt="anime" />
      </div>
      <div className="card-title">
        <h2>{post.title}</h2>
        <p>{post.rating}</p>
      </div>
    </div>
  );
};
