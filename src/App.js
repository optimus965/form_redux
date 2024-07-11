import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPostForm from "./features/Posts/AddPostForm";
import PostsList from "./features/Posts/PostsList";
import Header from "./components/Header";
import SinglePost from "./features/Posts/SinglePost";
import EditPostForm from "./features/Posts/EditPostForm";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Header />}>
            <Route path="views" element={<PostsList />} />
            <Route path="views/:id" element={<SinglePost />} />
            <Route path="form" element={<AddPostForm />} />
            <Route path="form/:id" element={<EditPostForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
