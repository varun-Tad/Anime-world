import { useEffect } from "react";
import { Card } from "../../Components/Card";
import { Input } from "../../Components/Input";
import { Select } from "../../Components/Select";
import { usePost } from "../../Contexts/PostContext";
import { getPosts } from "../../Fetchdata";
import { SearchFilter, selectFilterFunc } from "../../Functions";
import "./Homepage.css";

export const Homepage = () => {
  const { state, dispatch } = usePost();

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

      dispatch({ type: "setFilteredPosts", value: res.data }); // Entire data of each page
    });
  }, [state.page]);

  const nextPage = () => dispatch({ type: "nextPage", value: 1 });

  const prevPage = () => dispatch({ type: "prevPage", value: 1 });

  return (
    <div className="home-page">
      <div className="title">
        <h1>Anime World</h1>
      </div>
      <nav className="nav-container">
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
          <Card key={post.mal_id} post={post} />
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
