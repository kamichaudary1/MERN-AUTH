import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      setLoggedInUser(localStorage.getItem("loggedInUser"));
      fetchProducts(token);
    }
  }, [navigate]);

  const fetchProducts = async (token) => {
    try {
      const response = await fetch("http://localhost:8080/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const result = await response.json();
      setProducts(result);
    } catch (error) {
      handleError(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged Out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <h1>Welcome, {loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> — <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </>
  );
};

export default Home;
