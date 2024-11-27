import { createContext, useReducer } from "react";

// const DEFAULT_CONTEXT = {};
const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends, I am going to Mumbai. Hope to enjoy a lot. Peact out.",
    reactions: 2,
    userId: "user-9",
    tags: ["Vacation", "Mumbai", "Enjoy"],
  },
  {
    id: "2",
    title: "Pass ho gye",
    body: "Cleared all the exams in BTech.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider;
