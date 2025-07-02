import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SlideShow from '../components/SlideShow';
import './MainPage.css'; // You can style accordingly

const AllCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();


  const scrollCategories = (direction) => {
  const container = document.getElementById('categoryScroll');
  const scrollAmount = 150;
  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
};


  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("/api/v1/category/get-category");
        setCategories(data?.category || []);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Layout>

         {/* Floating Home Button */}
  <div className="floating-home-button">
    <button
      className="btn btn-primary"
      onClick={() => navigate('/home')}
    >
      All Products
    </button>
  </div>


     {/* Horizontal Categories with Arrows */}
<div className="horizontal-categories-wrapper">
  <button className="scroll-btn left" onClick={() => scrollCategories('left')}>⬅</button>

  <div className="horizontal-categories" id="categoryScroll">
    {categories.map((c) => (
      <div
        key={c._id}
        className="category-chip"
        onClick={() => navigate(`/category/${c.slug}`)}
      >
        {c.name}
      </div>
    ))}
  </div>

  <button className="scroll-btn right" onClick={() => scrollCategories('right')}>➡</button>
</div>


      {/* Image Slider */}
      <div className="mt-3">
        <SlideShow />
      </div>

      {/* Category Cards */}
      <div className="container mt-4">
        <div className="row">
          {categories.map((c) => (
            <div
              key={c._id}
              className="col-md-3 mb-4"
              onClick={() => navigate(`/category/${c.slug}`)}
            >
              <div className="card category-card">
                <img
                  src={`/api/v1/category/category-photo/${c._id}`} // adjust path if you store images
                  className="card-img-top"
                  alt={c.name}
                />
                <div className="card-body text-center">
                   <h5 className="card-title">{c.name} Collection</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Layout>
  );
};

export default AllCategoriesPage;
