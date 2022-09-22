import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
 
import {  ProBilgiler } from "../models/IProduct"
import { productList } from "../services/productService"
 
function Products() {
  const [products, setProducts] = useState<ProBilgiler[]>([])
  useEffect(() => {
    productList().then(res => {
      const arr = res.data.Products[0].bilgiler
      setProducts(arr)
    })
  }, [])
  const navigate = useNavigate()
  const gotoDetail = (item: ProBilgiler) => {
    navigate('/details/' + item.productId, { state: item })
  }

  const OldOrders = localStorage.getItem('basket')
  
   

  useEffect(() => {

  }, [])


  return (
    <>

      <div className="bg-secondary text-white p-2">
        <div className="container">
          <h1 className="h5"><i className="fa fa-caret-right"></i> Ürünler</h1>
        </div>
      </div>

      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            
            <div className="col-md-4 ml-auto">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search Product" />
                <div className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-3">
        <div className="row">
          <div className="col">
            <table className="table mb-0">
              <thead className="table-secondary">
                <tr>
                  <td>id</td>
                  <td>Ürün Resmi</td>
                  <td>Ürün Adı</td>
                  <td>Fiyatı</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) =>
                  <tr>
                    <td>{item.productId}</td>
                    <td>
                      <img src={item.images[0].normal} className="img-fluid" width="50" alt="" />
                    </td>
                    <td>{item.productName}</td>
                    <td> {item.productName}TL</td>

                    
                    <td className="text-right">
                      <button onClick={() => gotoDetail(item)} className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Detay</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row my-4">
          <div className="col">
            <nav>
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a href="" className="page-link">Previous</a>
                </li>

                <li className="page-item">
                  <a href="" className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a href="" className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a href="" className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a href="" className="page-link">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="modal fade" id="newProductModal">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">New Product</h5>
              <button className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name">Product Name</label>
                  <input type="text" name="name" id="name" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="price">Price</label>
                  <input type="text" name="price" id="price" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="category">Category</label>
                  <select name="category" id="category" className="form-control">
                    <option value="">Phone</option>
                    <option value="">Computer</option>
                    <option value="">Book</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="customFile">Image</label>
                  <div className="form-file">
                    <input type="file" name="" className="form-file-input" id="customFile" />
                    <label className="form-file-label" htmlFor="customFile">
                      <span className="form-file-text">Choose File</span>
                      <span className="form-file-button">Browse</span>
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="" id="isApproved" />
                    <label className="form-check-label" htmlFor="isApproved">
                      isApproved
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="description">Description</label>
                  <textarea name="" id="description" className="form-control"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" data-dismiss="modal">Save Changes</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default Products