import React from "react";
import "./Dashboard.scss";
import Navbar, { MobileNav } from "../../../components/admin/Navbar/Navbar";
import Badge from "../../../components/admin/Badge/Badge";
import Balance from "../../../components/admin/Balance/Balance";
import Chart from "../../../components/admin/Chart/Chart";
import ListTable from "../../../components/admin/Table/ListTable/ListTable";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="top">
        <Navbar />
        <MobileNav />
      </div>
      <div className="second flex">
        <Badge type="user" />
        <Badge type="order" />
        <Badge type="earning" />
        <Badge type="balance" />
      </div>
      <div className="third flex">
        <div className="Tleft box-shadow">
          <Balance />
        </div>
        <div className="Tright box-shadow">
          <p className="p-text">Last 6 Month revenue</p>
          <div className="chart__container">
            <Chart />
          </div>
        </div>
      </div>
      <div className="Dbottom box-shadow">
        <p className="p-text">Latest transaction</p>
        <ListTable />
      </div>
    </div>
  );
}

export default Dashboard;
