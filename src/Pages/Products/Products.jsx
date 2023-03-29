import React from "react";
import "./Products.css";
import { useEffect, useState } from "react";

function Employee() {
  const [data, setData] = useState([]);
  const [currentproduct, setcurrentproduct] = useState();
  const [title, setTitle] = useState( )
  const [price, setprice] = useState( )
  const [description, setdescription] = useState( )  
const [rating, setRating] = useState( )  
const [category, setcategory] = useState( )
  const destroy = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

    setData(data.filter((product) => product.id !== id));
  };
  const create = (product) => {
    setcurrentproduct(product);
     
  };
const update= (id)=>{
  fetch(`https://fakestoreapi.com/products/${id}`,{
    method:"PUT",
    body:JSON.stringify(
        {
            title: title,
            price: price,
            description: description, 
            // image: image,
            category: category
        }
    )
})
    .then(res=>res.json())
    .then(json=>console.log(json))
}


  const apicall = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    apicall();
  }, []);
  return (
    <>
      {console.log(data)}
      <div className="container py-5">
        <div className="row">
          <>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              {data.map((product) => (
                <tbody>
                  <tr>
                    <th scope="row">{product.id}</th>
                    <td>{product.title}</td>
                    <td> {product.category}</td>
                    <td>{product.price} </td>
                    <td>{product.rating.rate} </td>
                    <td>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="button-design"
                        onClick={() => create(product)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="button-design1"
                        onClick={() => destroy(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </>
        </div>
      </div>
      <div className="container-fluid">
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
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
                      defaultValue={currentproduct?.rating.rate}
                      onChange={(e) => setRating(e.target.value)}
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
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
