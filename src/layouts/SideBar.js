import React from 'react'

function SideBar() {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="active"> <a href="index.html"><i className="fas fa-tachometer-alt"></i> <span>Dashboard</span></a> </li>
                        <li className="list-divider"></li>
                        <li className="submenu"> <a href="#"><i className="fas fa-suitcase"></i> <span> Booking </span> </a>
                        </li>
                        <li className="submenu"> <a href="#"><i className="fas fa-user"></i> <span> Customers </span> </a>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fas fa-key"></i> <span> Rooms </span> </a>
                        </li>
                        <li className="submenu"> <a href="#"><i className="fas fa-user"></i> <span> Staff </span> </a>
                        </li>
                        <li> <a href="pricing.html"><i className="far fa-money-bill-alt"></i> <span>Pricing</span></a> </li>
                        <li className="submenu"> <a href="#"><i className="fas fa-share-alt"></i> <span> Apps </span> </a>
                        </li>
                        <li className="submenu"> <a href="#"><i className="fas fa-user"></i> <span> Employees </span> </a>
                        </li>
                        <li className="submenu"> <a href="#"><i className="far fa-money-bill-alt"></i> <span> Accounts </span> </a>
                        </li>
                        <li className="submenu"> <a href="#"><i className="fas fa-book"></i> <span> Payroll </span> </a>
                        </li>
                        <li> <a href="calendar.html"><i className="fas fa-calendar-alt"></i> <span>Calendar</span></a> </li>
                        <li className="submenu"> <a href="#"><i className="fe fe-table"></i> <span> Blog </span> </a>
                        </li>
                        <li> <a href="assets.html"><i className="fas fa-cube"></i> <span>Assests</span></a> </li>
                        <li> <a href="activities.html"><i className="far fa-bell"></i> <span>Activities</span></a> </li>
                        <li className="submenu"> <a href="#"><i className="fe fe-table"></i> <span> Reports </span> </a>
                        </li>
                        <li> <a href="settings.html"><i className="fas fa-cog"></i> <span>Settings</span></a> </li>
                        <li className="list-divider"></li>
                        <li className="menu-title mt-3"> <span>UI ELEMENTS</span> </li>
                        <li className="submenu"> <a href="#"><i className="fas fa-laptop"></i> <span> Components </span> </a>
                        </li>
                        <li className="submenu"> <a href="#"><i className="fas fa-edit"></i> <span> Forms </span> </a>
                        </li>
                        <li className="submenu"> <a href="#"><i className="fas fa-table"></i> <span> Tables </span> </a>
                        </li>
                        <li className="list-divider"></li>
                        <li className="menu-title mt-3"> <span>EXTRAS</span> </li>
                        <li className="submenu"> <a href="#"><i className="fas fa-columns"></i> <span> Pages </span> </a>
                        </li>
                        <li className="submenu"> <a href="#"><i className="fas fa-share-alt"></i> <span> Multi Level </span> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar