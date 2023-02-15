// import db from '../firebase';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import PostDetail from './PostDetail';
import CreatePost from "./CreatePost";
function App() {
 

  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/post/:postId" element={<PostDetail/>}></Route>
      <Route exact path="/createPost" element={<CreatePost/>}></Route>
    </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
// let data=[];
// db.collection('blog')
// .onSnapshot((snapshot)=>{
//   snapshot.docs.map((doc)=>{
//   console.log(doc.data());
//   // data.push(doc.data().title);
//   });
// });