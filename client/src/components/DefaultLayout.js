import React from "react";
import { Menu, Dropdown, Button, Space } from "antd";
import { useNavigate } from 'react-router-dom'


import "../resources/default-layout.css";
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('Expense_Tracker-user'));
  const navigate = useNavigate();
  const menu = (
    <Menu items={[
      {
        label: (
          <li onClick={()=>{
            localStorage.removeItem('Expense_Tracker-user')
            navigate('/login')
          }}>Logout</li> 
        )
      }
    ]} />
  );
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">Expense Tracker</h1>
        </div>
        <div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <button className="user_button">{user.name}</button>
          </Dropdown>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
