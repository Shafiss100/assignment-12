
import Navbar from "./Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Authentication/Login";
import SignUp from "./Component/Authentication/SignUp";
import Purchase from "./Component/Order.js/Purchase";
import RequireAuth from "./Component/Authentication/RequireAuth";
import DashBoard from "./Component/Order.js/DashBoard";
import MyProfile from "./Component/Order.js/MyProfile";
import Myorder from "./Component/Order.js/Myorder";
import AddReview from "./Component/Order.js/AddReview";
import Tools from "./Component/Tools/Tools";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import Blogs from "./Component/Blogs/Blogs";
import PortFolio from "./Component/Blogs/PortFolio";
import Update from "./Component/Order.js/Update";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/parts" element={<Tools></Tools>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<PortFolio></PortFolio>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="dashboard" element={<DashBoard></DashBoard>}>
          <Route path="profile" element={<MyProfile></MyProfile>} />
          <Route path="order" element={<Myorder></Myorder>} />
          <Route path="addreview" element={<AddReview></AddReview>} />
        </Route>
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
