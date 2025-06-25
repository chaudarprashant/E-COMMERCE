import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold text-primary">Explore Categories</h2>
        <div className="row justify-content-center">
          {categories.map((c) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
              key={c._id}
            >
              <Link
                to={`/category/${c.slug}`}
                className="btn btn-outline-primary w-100 py-3 rounded-4 shadow-sm text-capitalize"
                style={{
                  fontSize: "1.1rem",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s",
                }}
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
