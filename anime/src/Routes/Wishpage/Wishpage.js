import { useNavigate } from "react-router-dom";
import { PostCard } from "../../Components/Card";
import { usePost } from "../../Contexts/PostContext";
import "./Wishpage.css";

export const Wishpage = () => {
  const { state } = usePost();
  let navigate = useNavigate();

  const navigateHandler = (post) => {
    navigate(`/singlepage/${post.mal_id}`);
  };

  return (
    <div>
      <h1 className="wishlist-heading">Wishlist</h1>
      {state.wishlist.length === 0 ? (
        <div className="wishlist-empty-text">Wishlist Empty</div>
      ) : (
        <div className="wishes">
          {state.wishlist.map((wish) => (
            <PostCard
              navigateHandler={navigateHandler}
              key={wish.mal_id}
              post={wish}
            />
          ))}
        </div>
      )}
    </div>
  );
};