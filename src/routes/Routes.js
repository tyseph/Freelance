import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import InsertPost from "../components/insertPost";
import ReadingPage from "../components/ReadingPage";
import ViewAll from "../components/ViewAll";


const Routing = () => {
        return (
                <div>
                        {/* <Header /> */}
                        <BrowserRouter>
                                <div >
                                        <Routes>
                                                <Route path="/" element={<Home />} />
                                                <Route path="/insert" element={<InsertPost />} />
                                                <Route path="/read/:catogory/:title" element={<ReadingPage />} />
                                                <Route path="/viewall/:catogory" element={<ViewAll />} />


                                        </Routes>
                                </div>
                        </BrowserRouter>
                </div>
        )
}

export default Routing;