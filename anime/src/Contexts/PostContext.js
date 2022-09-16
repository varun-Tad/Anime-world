import { createContext, useContext, useReducer } from "react";
import { PostReducer } from "../Reducers/PostReducer";

const PostContext = createContext();

const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, {
    page: 1,
    posts: [],
    filteredPosts: [],
    currentSelected: "None",
    currentInput: "",
  });

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider, usePost };
