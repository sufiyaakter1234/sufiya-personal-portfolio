import React, { useState } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space, Drawer } from "antd";
import Logo from "../assets/Home/logo.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const dropdownItemsCompany = [
    {
      label: (
        <Link to="/company/about-us" rel="noopener noreferrer">
          About Us
        </Link>
      ),
      key: "about-us",
    },
    {
      label: (
        <Link to="/company/tech-pertners" rel="noopener noreferrer">
          Tech Partners
        </Link>
      ),
      key: "techPartners",
    },
  ];

  const dropdownItemsServices = [
    {
      label: (
        <Link to="/services/Structure-Cabling" rel="noopener noreferrer">
          Structure Cabling (Copper And Fiber)
        </Link>
      ),
      key: "structured",
    },
    {
      label: (
        <Link to="/services/Break-FixServices" rel="noopener noreferrer">
          Break/Fix Services
        </Link>
      ),
      key: "BreakFixServices",
    },
  ];

  const dropdownItemsProfile = [
    {
      label: (
        <Link to="/profilePage" rel="noopener noreferrer">
          Profile
        </Link>
      ),
      key: "profilepage",
    },
    {
      label: (
        <Link to="/profilePage/ongoing-tickets" rel="noopener noreferrer">
          Ongoing Tickets
        </Link>
      ),
      key: "ongoing",
    },
  ];

  const items = [
    {
      key: "home",
      label: <Link to="/">Home</Link>,
    },

    {
      key: "about",
      label: <Link to="/aboutUs">About Us</Link>,
    },
    {
      key: "services",
      label: <Link to="/Services">Services</Link>,
    },
    {
      key: "Projects",
      label: <Link to="/Projects">Projects</Link>,
    },
    {
      key: "Testemonial",
      label: <Link to="/Testemonial">Testemonial</Link>,
    },
    {
      key: "contactUs",
      label: <Link to="/contactUs">Contact Us</Link>,
    },
    {
      key: "profile",
      label: (
        <Link to="/contactUs"><button className="bg-[#FF6300] text-white px-5 rounded py-2">Download</button></Link>
      ),
    },
  ];

  return (
    <div className="bg-white text-black container m-auto">
      {/* Desktop Navbar */}
      <nav className="flex items-center justify-between gap-28 px-6 py-3">
        <h1 className="text-2xl font-bold"><span className="bg-[#FF6300] px-2 text-white">L</span>ogo</h1>
        <ul className="hidden md:flex lg:space-x-1 space-x-6 ">
          {items.map((item) => (
            <button key={item.key} className="list-none  px-4 hover:bg-[#FF6300] rounded hover:text-white">
              {item.label}
            </button>
          ))}
        </ul>
        <button
          className="md:hidden text-2xl"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <Drawer title="" placement="right" onClose={onClose} open={drawerOpen}>
        <ul className="flex flex-col space-y-4">
          {items.map((item) => (
            <li key={item.key} className="list-none">
              {item.label}
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};
