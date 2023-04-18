import React from "react";
import "./Products.css";
import { ClipLoader, FadeLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import { toast } from "react-toastify";
function Employee() {
  const [data, setData] = useState([]);
  const [currentproduct, setcurrentproduct] = useState();
  const [Dropcat, setDropcat] = useState("Sort-by-category");
  const [droplimit, setDroplimit] = useState("limit");
  const [sortbyn, setSortbyn] = useState("Sort");
  const [title, setTitle] = useState();
  const [price, setprice] = useState();
  const [description, setdescription] = useState();
  const [rating, setRating] = useState();
  const [category, setcategory] = useState();
  const [productRatingCount, setproductRatingCount] = useState();
  const [image, setimage] = useState();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(true);
  const [id, setid] = useState();
  const [scrollbar, setScrollbar] = useState(350);
  const [productspin, setProductspin] = useState(8);
  const history = useNavigate();

  const destroy = async (id) => {
    await axios.delete(`http://localhost:3005/data/${id}`);
    alert("product deleted successfully")
    apicall();
  };

  const create = (product) => {
    setcurrentproduct(product);
    setTitle(product.title);
    setprice(product.price);
    setcategory(product.category);
    setdescription(product.description);
    setimage(product.image);
    setRating(product?.rating?.rate);
    setproductRatingCount(product?.rating?.count);
  };

  const update = async (id) => {
    await axios.put(`http://localhost:3005/data/${id}`, {
      title: title,
      price: price,
      description: description,
      Rating: rating,
      category: category,
      image: image,
      rating: { rate: rating, count: productRatingCount },
    });
    apicall();
  };

  const sortby = (sb) => {
    setSortbyn(sb);
    fetch(`https://fakestoreapi.com/products?sort=${sb}`)
      .then((res) => res.json())
      .then((response) => setData(response))
      .then((json) => console.log(json));
  };
   
  const Sort = (Cat) => {
    setDropcat(Cat);
    fetch(`https://fakestoreapi.com/products/category/${Cat}`)
      .then((res) => res.json())
      .then((response) => setData(response))
      .then((json) => console.log(json));
  };

  const apicall = async () => {
    const result = await axios.get("http://localhost:3005/data");
    setData(result.data);
    setLoading2(false);
  };
  useEffect(() => {
    apicall();
  }, []);

  useEffect(() => {
    function spin() {
      console.log("Scroll Y!!", window.scrollY);
      console.log("Scroll Bar", scrollbar);
      if (window.scrollY >= scrollbar) {
        setLoading(true);
        setTimeout(() => {
          setProductspin(productspin + 5);
          setLoading(false);
        }, 1000);

        setScrollbar(
          document.documentElement.getBoundingClientRect().height - 400
        );
      }
      console.log(
        "Document Height",
        document.documentElement.getBoundingClientRect().height
      );
    }
    window.addEventListener("scroll", spin);

    return () => {
      window.removeEventListener("scroll", spin);
    };
  }, [productspin, scrollbar]);

  const override = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
  };

  const overrideFade = {
    position: "fixed",
    top: "90%",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
    // transform: "translate(-50%, -50%)",
  };

  const addprod = () => {
    const form = document.getElementById("myForm");
    if (form.checkValidity()) {
      axios.post("http://localhost:3005/data", {
        id: id,
        title: title,
        price: price,
        Category: category,
        Rating: rating,
        imagelink: image,
        Description: description,
      });
      toast.success("Product added successfully", {
        style: { fontSize: "14px" },
      });
    } else {
      toast.error("Please fill in all required fields correctly.", {
        style: { fontSize: "14px" },
      });
    }
  };

  const read = (product) => {
    setid(product?.id);
    setTitle(product?.title);
    setprice(product?.price);
    setcategory(product?.category);
    setdescription(product?.description);
    setimage(product?.image);
    setRating(product?.rating?.rate);
  };

  return (
    <>
      <ScrollToTop />
      <ClipLoader
        loading={loading2}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />{" "}
      <div className="container mt-4 d-flex align-items-center justify-content-end py-3 filter">
        <div class="btn-group">
          &nbsp;
          <button
            type="button"
            class="btn btn-info dropdown-toggle text-light bg-primary"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {sortbyn}
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item" onClick={() => sortby("asc")}>
              Ascending
            </li>
            <li class="dropdown-item" onClick={() => sortby("desc")}>
              Descending
            </li>
          </ul>
        </div>
        &nbsp;
        {/* catagory */}
        <div class="dropdown ">
          <button
            class="btn btn-secondary dropdown-toggle dropbutton text-light bg-primary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {Dropcat}
          </button>
          <ul class="dropdown-menu ">
            <li class="dropdown-item" onClick={() => Sort("men's clothing")}>
              Men's clothing
            </li>
            <li class="dropdown-item" onClick={() => Sort("electronics")}>
              Electronics
            </li>
            <li class="dropdown-item" onClick={() => Sort("jewelery")}>
              Jewelery{" "}
            </li>
            <li class="dropdown-item" onClick={() => Sort("women's clothing")}>
              Women's clothing
            </li>
          </ul>
          &nbsp;
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-primary dropbutton bg-primary text-light"
          >
            Add
          </button>
        </div>
      </div>
      {/* card  */}
      <div className="container py-1 card-section">
        <div className="row">
          {data.map((product, index) =>
            index < productspin ? (
              <>
                <div class="card-container">
                  <div
                    key={index}
                    data-bs-toggle="modal"
                    data-bs-target="#productInfoModal"
                    onClick={() => read(product)}
                  >
                    {" "}
                    <img class="im-image" src={product.image} alt=" " />
                  </div>
                  <br />
                  <main class="main-content">
                    <div className="product-name">
                      <b>
                        {product.title &&
                          (product.title.length > 30
                            ? product.title.slice(0, 20) + "..."
                            : product.title)}
                      </b>
                      <span class="tooltiptext"> {product.title} </span>
                    </div>
                    <hr />
                    <div class="flex-row"> $ {product.price}</div>
                    <div className="button-class">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalupdate"
                        className="button-design"
                        onClick={() => create(product)}
                      >
                        Update
                      </button>
                      <button
                        className="button-design1"
                        onClick={() => destroy(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </main>
                </div>
              </>
            ) : (
              ""
            )
          )}
          <ClipLoader
            color={"#000"}
            loading={loading}
            cssOverride={overrideFade}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
      {/* read modal  0*/}
      <div
        class="modal fade"
        id="productInfoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="modal-content text-dark productInfoModal">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body row">
              <div className="product-image col-md-6">
                <img src={image} alt="" height={"200px"} width={"200px"} />
              </div>
              <div className="product-info col-md-6 pt-3">
                <h6>Product ID: {id}</h6>
                <h6>Product Price: {price}</h6>
                <h6>Product Category: {category}</h6>
                <h6>Product Rating: {rating}</h6>
              </div>
              <h6 className="pt-3">Product Description: </h6>{" "}
              <span>{description}</span>
            </div>
          </div>
        </div>
      </div>
      {/* update modal  */}
      <div className="container-fluid">
        <div
          class="modal fade "
          id="exampleModalupdate"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Update Product
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-2">
                    <label for="recipient-name" class="col-form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      defaultValue={currentproduct?.title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div class="mb-2">
                    <label for="recipient-name" class="col-form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      defaultValue={currentproduct?.price}
                      onChange={(e) => setprice(e.target.value)}
                    />
                  </div>
                  <div class="mb-2">
                    <label for="recipient-name" class="col-form-label">
                      Category
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      defaultValue={currentproduct?.category}
                      onChange={(e) => setcategory(e.target.value)}
                    />
                  </div>
                  <div class="mb-2">
                    <label for="recipient-name" class="col-form-label">
                      Rating
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      defaultValue={currentproduct?.rating?.rate}
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </div>
                  <div class="mb-2">
                    <label for="recipient-name" class="col-form-label">
                      Image link
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      defaultValue={currentproduct?.image}
                      onChange={(e) => setimage(e.target.value)}
                    />
                  </div>
                  <div class="mb-2">
                    <label for="message-text" class="col-form-label">
                      Description
                    </label>
                    <textarea
                      defaultValue={currentproduct?.description}
                      class="form-control"
                      id="message-text"
                      onChange={(e) => setdescription(e.target.value)}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={() => update(currentproduct.id)}
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* add modal  */}
      <div className="container-fluid">
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Product
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body  ">
                <form className="row" id="myForm">
                  <div class="col-md-6">
                    <label for="id" class="col-form-label">
                      Id:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="id"
                      onChange={(e) => setid(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="title" class="col-form-label">
                      Title:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="price" class="col-form-label">
                      Price:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="price"
                      onChange={(e) => setprice(e.target.value)}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="category" class="col-form-label">
                      Category:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      onChange={(e) => setcategory(e.target.value)}
                      required
                    />
                  </div>
                  <div class="mb-2">
                    <label for="rating" class="col-form-label">
                      Rating
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="rating"
                      min={0}
                      max={5}
                      onChange={(e) => setRating(e.target.value)}
                      required
                    />
                  </div>
                  <div class="mb-2">
                    <label for="image" class="col-form-label">
                      Image link
                    </label>
                    <input
                      type="url"
                      class="form-control"
                      id="image"
                      onChange={(e) => setimage(e.target.value)}
                      required
                    />
                  </div>
                  <div class="mb-2">
                    <label for="description" class="col-form-label">
                      Description
                    </label>
                    <textarea
                      class="form-control"
                      id="description"
                      onChange={(e) => setdescription(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => addprod()}
                      type="submit"
                      class="btn btn-primary"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
