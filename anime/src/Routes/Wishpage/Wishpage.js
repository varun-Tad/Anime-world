import { useNavigate } from "react-router-dom";
import { PostCard } from "../../Components/Card";
import { usePost } from "../../Contexts/PostContext";
import "./Wishpage.css";

const Wishpage = () => {
  const { state, dispatch } = usePost();
  let navigate = useNavigate();

  const navigateHandler = (post) => {
    navigate(`/singlepage/${post.mal_id}`);
  };

  const clearWishlist = () => {
    localStorage.removeItem("Animewish");
    dispatch({ type: "clearWish" });
  };

  return (
    <div>
      <h1 className="wishlist-heading">Wishlist</h1>

      {state.wishlist.length === 0 ? (
        ""
      ) : (
        <button className="clear-wishlistBtn" onClick={clearWishlist}>
          Clear Wishlist
        </button>
      )}

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

export default Wishpage;
