import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-4">
        <div className="row product-details-container">
          <div className="col-md-5">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="col-md-7 product-details-info">
            <h1>Product Details</h1>
            <h6><strong>Name:</strong> {product.name}</h6>
            <h6><strong>Description:</strong> {product.description}</h6>
            <h6><strong>Price:</strong> ₹{product.price}</h6>
            <h6><strong>Category:</strong> {product?.category?.name}</h6>
            <button
              className="btn btn-secondary mt-3"
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem("cart", JSON.stringify([...cart, product]));
                toast.success("Item Added to cart");
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Similar Products */}
        <div className="row similar-products mt-5">
          <h6>Similar Products</h6>
          {relatedProducts.length < 1 ? (
            <p className="text-center">No Similar Products found</p>
          ) : (
            <div className="d-flex flex-wrap">
              {relatedProducts?.map((p) => (
                <div className="card m-2" style={{ width: "16rem" }} key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p?._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0, 30)}...</p>
                    <p className="card-text">₹{p.price}</p>
                    <div className="d-flex justify-content-between mt-2">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem("cart", JSON.stringify([...cart, p]));
                          toast.success("Item Added to cart");
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
