import React from 'react';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Footer from '../component/Footer';

import DeleteUserData from './DeleteUserData';
import RegApprove from './RegApprove';
import ViewCase from './ViewCase';
import ViewDoctor from './ViewDoctor';
import ViewDoctorAssignment from './ViewDoctorAssignment';
import ClientMaster from './ClientMaster';
import AdvtMaster from './AdvtMaster';
import AdvtMasterBottom from './AdvtMasterBottom';
import WallPost from './WallPost';

function Dashboard() {
    return (

        <Router>
       <div id="wrapper">
         <Sidebar/>

         <div id="content-wrapper" className="d-flex flex-column">
           <div id="content">
             <Header/>

             <Routes>
               <Route path="/dashboard" element={<Dboard/>} />
               <Route path="/regapprove" element={<RegApprove/>} />
               <Route path="/deleteuserdata" element={<DeleteUserData/>} />
               <Route path="/viewcase" element={<ViewCase/>} />
               <Route path="/viewDoctor" element={<ViewDoctor/>} />
               <Route path="/viewDoctorAssignment" element={<ViewDoctorAssignment/>} />
               <Route path="/clientMaster" element={<ClientMaster/>} />
               <Route path="/advtMaster" element={<AdvtMaster/>} />
               <Route path="/advtmasterbottom" element={<AdvtMasterBottom/>} />
               <Route path="/wallPost" element={<WallPost/>} />
             </Routes>
           </div>

           <Footer/>
         </div>
       </div>
     </Router>    
    );
}

function Dboard(){
    return(
        <div className="container-fluid">
            <div className="d-sm-flex flex-column justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <div className="row">
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Earnings (Monthly)</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$0,000</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Earnings (Annual)</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$000,000</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                        </div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">00%</div>
                                            </div>
                                            <div className="col">
                                                <div className="progress progress-sm mr-2">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Pending Requests</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">00</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                <div className="dropdown no-arrow">
                                
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        
                                        <div className="dropdown-divider"></div>
                                        
                                    </div>
                                </div>
                            </div>
                        
                            <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="myAreaChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

            
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                <div className="dropdown no-arrow">
                                
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        
                                        <div className="dropdown-divider"></div>
                                        
                                    </div>
                                </div>
                            </div>
            
                            <div className="card-body">
                                <div className="chart-pie pt-4 pb-2">
                                    <canvas id="myPieChart"></canvas>
                                </div>
                                <div className="mt-4 text-center small">
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-primary"></i> Direct
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-success"></i> Social
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-info"></i> Referral
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="small font-weight-bold">Server Migration <span
                                        className="float-right">00%</span></h4>
                                <div className="progress mb-4">
                                    
                                </div>
                                <h4 className="small font-weight-bold">Sales Tracking <span
                                        className="float-right">00%</span></h4>
                                <div className="progress mb-4">
                                    
                                </div>
                                <h4 className="small font-weight-bold">Customer Database <span
                                        className="float-right">00%</span></h4>
                                <div className="progress mb-4">
                                    
                                </div>
                                <h4 className="small font-weight-bold">Payout Details <span
                                        className="float-right">00%</span></h4>
                                <div className="progress mb-4">
                                    
                                </div>
                                <h4 className="small font-weight-bold">Account Setup 
                                    <span className="float-right">Complete!</span>
                                </h4>
                                <div className="progress">
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
