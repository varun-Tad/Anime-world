import { useEffect } from "react";
import { Input } from "../../Components/Input";
import { Select } from "../../Components/Select";
import { usePost } from "../../Contexts/PostContext";
import { getPosts } from "../../Fetchdata";
import "./Homepage.css";

export const Homepage = () => {
  const { state, dispatch } = usePost();

  useEffect(() => {
    getPosts(state.page).then((res) => {
      if (state.currentInput === "") {
        if (state.currentSelected === "None") {
          dispatch({ type: "setPosts", value: res.data });
        } else {
          let arr = selectFilterFunc(res.data, state.currentSelected);
          console.log("arr", arr);

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
  return (
    <>
      <div className="title">
        <h1>Anime World</h1>
      </div>
      <nav className="nav-container">
        <div className="input-tag">
          <Input placeholder="Search..." />
        </div>
        <div className="select-tag">
          <p>FIlter by Genre</p>
          <Select />
        </div>
      </nav>
      <main>
        <div></div>
      </main>

      <div className="buttons">
        <button>← Prev Page</button>
        <button>Next Page →</button>
      </div>
    </>
  );
};
