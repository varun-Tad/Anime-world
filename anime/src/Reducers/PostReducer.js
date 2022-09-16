export const Postreducer = (state, action) => {
  switch (action.type) {
    case "setCurrentInput": {
      return { ...state, currentInput: action.value };
    }
    case "setPosts": {
      return { ...state, posts: action.value };
    }
    case "setCurrentSelected": {
      return { ...state, currentSelected: action.value };
    }
    case "setFilteredPosts": {
      return { ...state, filteredPosts: action.value };
    }
    case "nextPage": {
      return { ...state, page: state.page + action.value };
    }
    case "prevPage": {
      return { ...state, page: state.page - action.value };
    }
    default: {
      return state;
    }
  }
};
