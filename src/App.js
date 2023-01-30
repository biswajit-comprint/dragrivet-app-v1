// import React, { useState } from 'react';
// import {Link} from "react-router-dom";
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


import AdminLigin from './pages/AdminLigin';

import './App.css';

function App() {

  
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          {/* {isLogin ? (<AdminLigin/>) : (<Dashboard/>)} */}
          <AdminLigin/>
        </div>
      </div>
    </div>





    // <Router>
    //   <div id="wrapper">
    //     <Sidebar/>

    //     <div id="content-wrapper" className="d-flex flex-column">
    //       <div id="content">
    //         <Header/>

    //         <Routes>
    //           <Route path="/dashboard" element={<Dashboard/>} />
    //           <Route path="/regapprove" element={<RegApprove/>} />
    //           <Route path="/deleteuserdata" element={<DeleteUserData/>} />
    //           <Route path="/viewcase" element={<ViewCase/>} />
    //           <Route path="/viewDoctor" element={<ViewDoctor/>} />
    //           <Route path="/viewDoctorAssignment" element={<ViewDoctorAssignment/>} />
    //           <Route path="/clientMaster" element={<ClientMaster/>} />
    //           <Route path="/advtMaster" element={<AdvtMaster/>} />
    //           <Route path="/advtmasterbottom" element={<AdvtMasterBottom/>} />
    //           <Route path="/wallPost" element={<WallPost/>} />
    //           <Route path="/" element={<AdminLigin/>} />
    //         </Routes>
    //       </div>

    //       <Footer/>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
