import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostCard } from "../../Components/Card";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import { usePost } from "../../Contexts/PostContext";
import { getPosts } from "../../Fetchdata";
import { SearchFilter, selectFilterFunc } from "../../Functions";
import { useDrop } from "react-dnd";
import img from "../../images/wishlist.png";
import { toast } from "react-toastify";
import "./Homepage.css";

const Homepage = () => {
  const { state, dispatch } = usePost();
  let theWish = [];
  let currentId;
  const [dupWish, setDupWish] = useState([]);

  let navigate = useNavigate();

  const navigateHandler = (post) => {
    navigate(`/singlepage/${post.mal_id}`);
  };

  const navigateTowishlist = () => {
    navigate("/wishlist");
  };
  const addToWishlist = (id) => {
    theWish = state.posts.filter((ele) => Number(id) === Number(ele.mal_id));
    currentId = id;
    if (state.wishlist.some((ele) => ele.mal_id === theWish[0].mal_id)) {
      toast.error("Already exists in wishlist", {
        autoClose: 3000,
      });
    } else {
      dispatch({ type: "setWish", value: theWish[0] });
      setDupWish([...dupWish, theWish[0]]);
      toast.success("Added to wishlist !", {
        autoClose: 3000,
      });
    }
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "image",
      drop: (item) => addToWishlist(item.mal_id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [state.posts]
  );

  const InputChangeHandler = (e) => {
    dispatch({ type: "setCurrentInput", value: e.target.value });
    const newArr = state.filteredPosts.filter((ele) =>
      ele.title.toLowerCase().includes(e.target.value)
    );
    if (state.currentSelected === "None") {
      dispatch({ type: "setPosts", value: newArr });
    } else {
      let arr = selectFilterFunc(newArr, state.currentSelected);
      dispatch({ type: "setPosts", value: arr });
    }
  };

  const selectChangeHandler = (e) => {
    dispatch({ type: "setCurrentSelected", value: e.target.value });
    if (e.target.value === "None") {
      let ans = SearchFilter(state.filteredPosts, state.currentInput);
      dispatch({ type: "setPosts", value: ans });
    } else {
      let arr = SearchFilter(state.filteredPosts, state.currentInput);
      let arr2 = selectFilterFunc(arr, e.target.value);
      dispatch({ type: "setPosts", value: arr2 });
    }
  };

  useEffect(() => {
    getPosts(state.page).then((res) => {
      if (state.currentInput === "") {
        if (state.currentSelected === "None") {
          dispatch({ type: "setPosts", value: res.data });
        } else {
          let arr = selectFilterFunc(res.data, state.currentSelected);
          dispatch({ type: "setPosts", value: arr });
        }
      } else {
        let arr = SearchFilter(res.data, state.currentInput);
        if (state.currentSelected === "None") {
          dispatch({ type: "setPosts", value: arr });
        } else {
          let arr1 = selectFilterFunc(arr, state.currentSelected);
          dispatch({ type: "setPosts", value: arr1 });
        }
      }
      dispatch({ type: "setFilteredPosts", value: res.data });
    });
  }, [state.page]);

  useEffect(() => {
    localStorage.setItem("Animewish", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const nextPage = () => dispatch({ type: "nextPage", value: 1 });
  const prevPage = () => dispatch({ type: "prevPage", value: 1 });

  return (
    <div className="home-page">
      <div ref={drop} className="title">
        <h1>Anime World</h1>
      </div>
      <nav className="nav-container">
        <div ref={drop} className="wishlist-item">
          <p>Drag to add to watchlist</p>
          <img className="img-pic" src={img} alt="wishlist" />
          <button onClick={navigateTowishlist} className="wishlist-btn">
            Go to watchlist
          </button>
        </div>

        <div className="input-tag">
          <Input
            InputChangeHandler={InputChangeHandler}
            placeholder="Search..."
          />
        </div>
        <div className="select-tag">
          <p>Filter by Genre</p>
          <Select selectChangeHandler={selectChangeHandler} />
        </div>
      </nav>
      <main className="posts">
        {state.posts.map((post) => (
          <PostCard
            navigateHandler={navigateHandler}
            key={post.mal_id}
            post={post}
          />
        ))}
      </main>

      <div className="buttons">
        <button onClick={prevPage} disabled={state.page === 1}>
          ← Prev Page
        </button>
        <button onClick={nextPage} disabled={!state.posts.length}>
          Next Page →
        </button>
      </div>
    </div>
  );
};

export default Homepage;
