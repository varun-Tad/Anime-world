import { createContext, useContext, useReducer } from "react";
import { Postreducer } from "../Reducers/PostReducer";

const PostContext = createContext();

const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Postreducer, {
    page: 1,
    posts: [],
    filteredPosts: [],
    currentSelected: "None",
    currentInput: "",
    wishlist: [],
  });

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider, usePost };
