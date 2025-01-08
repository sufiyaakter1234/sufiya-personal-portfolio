import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Logo from "../assets/Home/logo.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

export const Navbar = () => {
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
          Tect Partners
        </Link>
      ),
      key: "techPertners",
    },
  ];

  const dropdownItemsServices = [
    {
      label: (
        <Link to="/services/Structure-Cabiling" rel="noopener noreferrer">
          Structure Cabiling (Copper And Fiber)
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
      key: "company",
      label: (
        <Dropdown menu={{ items: dropdownItemsCompany }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
              Company
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>
      ),
    },
    {
      key: "services",
      label: (
        <Dropdown menu={{ items: dropdownItemsServices }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
              Services
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>
      ),
    },
    {
      key: "contactUs",
      label: <Link to="/contactUs">Contact Us</Link>,
    },
    {
      key: "blog",
      label: <Link to="/blog">Blog</Link>,
    },
    {
        key: "submitTicket",
        label: <Link to="/submit-a-ticket">Submit A Ticket</Link>,
    },
    {
        key: "profile",
        label: (
          <Dropdown menu={{ items: dropdownItemsProfile }} trigger={["click"]}>
            <Link onClick={(e) => e.preventDefault()}>
              <Space>
              <FaRegUserCircle />
                <DownOutlined />
              </Space>
            </Link>
          </Dropdown>
        ),
      },
  ];

  return (
    <div className="bg-[#2E4CB9] text-white">
      <nav className="flex items-center justify-center  gap-24 py-3">
        <img className="w-[50px]" src={Logo} alt="Logo" />
        <ul className="flex space-x-16">
          {items.map((item) => (
            <li key={item.key} className="list-none">
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
