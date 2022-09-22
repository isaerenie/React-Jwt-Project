import { NavLink } from "react-router-dom"

function DComponent() {
    return (
        <>
        
    <div className="bg-secondary text-white p-2">
        <div className="container">
            <h1 className="h5 mb-0"><i className="fa fa-caret-right"></i> Dashboard</h1>
        </div>
    </div>

    <div className="container my-3">
        <div className="row">
            <div className="col-md-3">
                <div className="card text-center bg-primary text-white mb-3">
                    <div className="card-body">
                        <h3>Users</h3>
                        <h4 className="display-4"> <i className="fa fa-user"></i> 125 </h4>
                        <a href="" className="btn btn-outline-light btn-sm">Manage</a>
                    </div>
                </div>
                <div className="card text-center bg-success text-white mb-3">
                    <div className="card-body">
                        <h3>Ürünler</h3>
                        <h4 className="display-4"> <i className="fa fa-folder-open"></i> 256 </h4>
                      <NavLink className="btn btn-outline-light btn-sm" to='/products'>Ürünler</NavLink>
                    </div>
                </div>
                <div className="card text-center bg-info text-white mb-3">
                    <div className="card-body">
                        <h3>Categories</h3>
                        <h4 className="display-4"> <i className="fa fa-folder-open"></i> 12 </h4>
                        <a href="" className="btn btn-outline-light btn-sm">Manage</a>
                    </div>
                </div>
                <div className="card text-center bg-warning text-white mb-3">
                    <div className="card-body">
                        <h3>Orders</h3>
                        <h4 className="display-4"> <i className="fa fa-shopping-basket"></i> 179 </h4>
                        <a href="" className="btn btn-outline-light btn-sm">Manage</a>
                    </div>
                </div>
            </div>
            <div className="col-md-9">

                <div className="accordion" id="accordionExample">
                    <div className="card mb-3">
                        <div className="card-header" id="headingOne">
                            <button type="button" data-toggle="collapse" data-target="#collapseOne" className="btn btn-link btn-block text-left text-decoration-none link-dark">
                                En son Siparişler
                            </button>
                        </div>

                        <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                            <table className="table mb-0">
                                <thead className="table-secondary">
                                    <tr>
                                        <td>Order Id</td>
                                        <td>Username</td>
                                        <td>Total</td>
                                        <td>Date</td>
                                        <td>State</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1010</td>
                                        <td>username1</td>
                                        <td>1000 TL</td>
                                        <td>10/10/2020 22.00</td>
                                        <td>
                                            <span className="badge bg-primary">Onay Bekliyor</span>
                                        </td>
                                        <td className="text-right">
                                            <a href="details.html" className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Details</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1011</td>
                                        <td>username2</td>
                                        <td>2000 TL</td>
                                        <td>10/10/2020 23.00</td>
                                        <td>
                                            <span className="badge bg-warning">Hazırlanıyor</span>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1012</td>
                                        <td>username1</td>
                                        <td>1000 TL</td>
                                        <td>10/10/2020 22.00</td>
                                        <td>
                                            <span className="badge bg-success">Kargolandı</span>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1013</td>
                                        <td>username3</td>
                                        <td>1000 TL</td>
                                        <td>10/10/2020 22.00</td>
                                        <td>
                                            <span className="badge bg-primary">Onay Bekliyor</span>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1010</td>
                                        <td>username1</td>
                                        <td>1000 TL</td>
                                        <td>10/10/2020 22.00</td>
                                        <td>
                                            <span className="badge bg-primary">Onay Bekliyor</span>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Details</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="card mb-3">
                        <div className="card-header" id="headingTwo">
                            <button type="button" data-toggle="collapse" data-target="#collapseTwo" className="btn btn-link btn-block text-left text-decoration-none link-dark">
                                Son Eklenen Ürünler
                            </button>
                        </div>

                        <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                            <table className="table mb-0">
                                <thead className="table-secondary">
                                    <tr>
                                        <td>Product Id</td>
                                        <td>Image</td>
                                        <td>Name</td>
                                        <td>Price</td>
                                        <td>Approved</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                   <tr>
                                       <td>1</td>
                                       <td>
                                           <img src="img/1.jpg" className="img-fluid" width="50" alt=""/>
                                       </td>
                                       <td>Samsung S6</td>
                                       <td>1000 TL</td>
                                       <td>
                                           <i className="fa fa-check"></i>
                                       </td>
                                       <td className="text-right">
                                            <button className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Details</button>
                                        </td>
                                   </tr>
                                   <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="img/2.jpg" className="img-fluid" width="50" alt=""/>
                                    </td>
                                    <td>Samsung S7</td>
                                    <td>2000 TL</td>
                                    <td>
                                        <i className="fa fa-check"></i>
                                    </td>
                                    <td className="text-right">
                                         <button className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Details</button>
                                     </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="img/3.jpg" className="img-fluid" width="50" alt=""/>
                                    </td>
                                    <td>Samsung S8</td>
                                    <td>3000 TL</td>
                                    <td>
                                        <i className="fa fa-check"></i>
                                    </td>
                                    <td className="text-right">
                                         <button className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Details</button>
                                     </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="img/4.jpg" className="img-fluid" width="50" alt=""/>
                                    </td>
                                    <td>Samsung S9</td>
                                    <td>5000 TL</td>
                                    <td>
                                        <i className="fa fa-check"></i>
                                    </td>
                                    <td className="text-right">
                                         <button className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Details</button>
                                     </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="img/5.jpg" className="img-fluid" width="50" alt=""/>
                                    </td>
                                    <td>Samsung S10</td>
                                    <td>5000 TL</td>
                                    <td>
                                        <i className="fa fa-times"></i>
                                    </td>
                                    <td className="text-right">
                                         <button className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Details</button>
                                     </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>


            
            </div>
        </div>
    </div>
        </>
     )
}
export default DComponent