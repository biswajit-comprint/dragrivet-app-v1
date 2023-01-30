import React from 'react';
import {Link} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
// import FontAwesomeIcon from "font-awesome";



function Sidebar() {
  return (
        <nav>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Dr Agrivet</div>
                </Link>
                <li className="nav-item active">
                    <Link className="nav-link collapsed" to="/dashboard" data-toggle="collapse" data-target="#dashboard"
                        aria-expanded="true" aria-controls="dashboard"><i className="fa fa-fw fa-wrench"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">
                    Interface
                </div>
                <li className="nav-item">
                    <Link className="nav-link collapsed" href="#"  data-toggle="collapse" data-target="#Activity-View"
                        aria-expanded="true" aria-controls="Activity-View">
                        <i className="fa fa-fw fa-cog"></i>
                        <span>Activity View</span>
                    </Link>
                    <div id="Activity-View" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Activity Group:</h6>
                            <Link className="collapse-item" to="/regapprove">
                                <i class="fa fa-files-o me-1" aria-hidden="true"></i>
                                Regstration Approve
                            </Link>
                            <Link className="collapse-item" to="/deleteuserdata" >
                                <i className="fa fa-trash me-1"></i>
                                Delete User
                            </Link>
                            <Link className="collapse-item" to="/viewcase">
                                {/* <i class="fa fa-file"></i> */}
                                <i class="fa fa-stethoscope me-1"></i>
                                View Case
                            </Link>
                            <Link className="collapse-item" to="/viewDoctor">
                                <i class="fa fa-user-md me-1"></i>
                                View Doctor
                            </Link>
                            <Link className="collapse-item" to="/viewDoctorAssignment" >
                                <i class="fa fa-user-md me-1" aria-hidden="true"></i>
                                View Doctor Assignment
                            </Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" href="#"  data-toggle="collapse" data-target="#Wall-Post-And-Advertisement"
                        aria-expanded="true" aria-controls="Activity-View">
                        <i className="fa fa-fw fa-cog"></i>
                        <span>Wall Post And Advertisement</span>
                    </Link>
                    <div id="Wall-Post-And-Advertisement" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Wall Post And<br></br> Advertisement:</h6>
                            <Link className="collapse-item" to="/clientMaster">
                                <i class="fa fa-male mr-1" aria-hidden="true"></i>
                                client Master
                            </Link>
                            <Link className="collapse-item" to="/advtMaster">
                                <i class="fa fa-adn mr-1" aria-hidden="true"></i>
                                Advt Master
                            </Link>
                            <Link className="collapse-item" to="/advtmasterbottom">
                                <i class="fa fa-adn mr-1" aria-hidden="true"></i>
                                Advt Master Bottom
                            </Link>
                            <Link className="collapse-item" to="/wallPost">
                                <i class="fa fa-picture-o mr-1" aria-hidden="true"></i>
                                Wall Post
                            </Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" href="#"  data-toggle="collapse" data-target="#Pages"
                        aria-expanded="true" aria-controls="Activity-View">
                        <i class="fa fa-file mr-1" aria-hidden="true"></i>
                        <span>Pages</span>
                    </Link>
                    <div id="Pages" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Pages:</h6>
                            <Link className="collapse-item" to="/AdminLigin">
                                <i class="fa fa-file mr-1" aria-hidden="true"></i>
                                Admin Login Page
                            </Link>
                        </div>
                    </div>
                </li>             
            </ul>
        </nav>
        
    
  );
}

export default Sidebar;
