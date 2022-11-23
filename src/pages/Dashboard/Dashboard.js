/** @format */

import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
      // console.log(data);
    },
  });

  return (
    <div>
      <h2>Dashboard</h2>
      <div
        className='d-flex justify-content-center align-items-center'
        id='wrapper'
      >
        <div
          className='bg-white offcanvas offcanvas-end'
          tabIndex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom'>
            <i className='fas fa-user-secret me-2'></i>Admin Panel
          </div>
          <div className='offcanvas-header'>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='list-group list-group-flush my-3'>
            <a
              href='#'
              className='list-group-item list-group-item-action bg-transparent second-text active'
            >
              <i className='fas fa-tachometer-alt me-2'></i>Dashboard
            </a>
            <a
              href='#'
              className='list-group-item list-group-item-action bg-transparent second-text fw-bold'
            >
              <i className='fas fa-project-diagram me-2'></i>Projects
            </a>
            <a
              href='#'
              className='list-group-item list-group-item-action bg-transparent second-text fw-bold'
            >
              <i className='fas fa-chart-line me-2'></i>Analytics
            </a>
            <a
              href='#'
              className='list-group-item list-group-item-action bg-transparent second-text fw-bold'
            >
              <i className='fas fa-paperclip me-2'></i>Reports
            </a>
            <a
              href='#'
              className='list-group-item list-group-item-action bg-transparent second-text fw-bold'
            >
              <i className='fas fa-shopping-cart me-2'></i>Store Mng
            </a>
            <a
              href='#'
              className='list-group-item list-group-item-action bg-transparent second-text fw-bold'
            >
              <i className='fas fa-gift me-2'></i>Products
            </a>
            <a
              href='#'
              className='list-group-item list-group-item-action bg-transparent second-text fw-bold'
            >
              <i className='fas fa-comment-dots me-2'></i>Chat
            </a>
            <a
              href='#'
              className='list-group-item list-group-item-action bg-transparent second-text fw-bold'
            >
              <i className='fas fa-map-marker-alt me-2'></i>Outlet
            </a>
            <a
              href='#'
              className='list-group-item list-group-item-action bg-transparent text-danger fw-bold'
            >
              <i className='fas fa-power-off me-2'></i>Logout
            </a>
          </div>
        </div>

        <div id='page-content-wrapper'>
          <nav className='navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4'>
            <div
              className='d-flex align-items-center navbar-toggler'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasNavbar'
              aria-controls='offcanvasNavbar'
            >
              <i className='fas fa-align-left primary-text fs-4 me-3'></i>
              <h2 className='fs-2 m-0'>Sidebar Dashboard</h2>
            </div>

            {/* <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasNavbar'
              aria-controls='offcanvasNavbar'
            >
              <span className='navbar-toggler-icon'></span>
            </button> */}

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle second-text fw-bold'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i className='fas fa-user me-2'></i>John Doe
                  </a>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <li>
                      <a className='dropdown-item' href='#'>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          <div className='container-fluid px-4'>
            <div className='row g-3 my-2'>
              <div className='col-md-3'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                  <div>
                    <h3 className='fs-2'>720</h3>
                    <p className='fs-5'>Products</p>
                  </div>
                  <i className='fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3'></i>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                  <div>
                    <h3 className='fs-2'>4920</h3>
                    <p className='fs-5'>Sales</p>
                  </div>
                  <i className='fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3'></i>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                  <div>
                    <h3 className='fs-2'>3899</h3>
                    <p className='fs-5'>Delivery</p>
                  </div>
                  <i className='fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3'></i>
                </div>
              </div>

              <div className='col-md-3'>
                <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                  <div>
                    <h3 className='fs-2'>%25</h3>
                    <p className='fs-5'>Increase</p>
                  </div>
                  <i className='fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3'></i>
                </div>
              </div>
            </div>

            <div className='row my-5 d-flex justify-content-center'>
              <h3 className='fs-4 mb-3'>My Appoinments</h3>
              <div className='col'>
                <table className='table bg-white rounded shadow-sm  table-hover'>
                  <thead>
                    <tr>
                      <th scope='col' width='50'>
                        #
                      </th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Treatment</th>
                      <th scope='col'>Date</th>
                      <th scope='col'>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking, i) => (
                      <tr key={booking._id}>
                        <th scope='row'>{i + 1}</th>
                        <td>{booking.patient}</td>
                        <td>{booking.treatment}</td>
                        <td>{booking.appoinmentDate}</td>
                        <td>{booking.slot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
