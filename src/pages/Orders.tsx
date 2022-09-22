import { useEffect, useState } from "react";
import { OrderList } from "../models/IOrders";
import { orderList, orders } from "../services/productService"
import { control } from "../utils/control";

function Orders() {

    const [products, setProducts] = useState<OrderList[]>([])

    const useris = control()!.user[0].bilgiler?.userId!
    useEffect(() => {
        orders(useris).then(res => {
            if (res.data) {
                const arr = res.data.orderList[0]
                setProducts(arr)
            }
        })
        
    }, [])
    return (
        <>
            <div className="bg-secondary text-white p-2">
                <div className="container">
                    <h1 className="h5"><i className="fa fa-caret-right"></i> Siparişler</h1>
                </div>

            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col">
                        <table className="table mb-0">
                            <thead className="table-secondary">
                                <tr>
                                    <td>id</td>
                                    <td>Ürün Resmi</td>
                                    <td>Ürün Adı</td>
                                    <td>Açıklama</td>
                                    <td>Fiyatı</td>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item, index) =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>
                                            <img src={item.thumb} className="img-fluid" width="50" alt="" />
                                        </td>
                                        <td>{item.adi}</td>
                                        <td> {item.kisa_aciklama}</td>
                                        <td> {item.fiyat}</td>
                                        <td className="text-right">
                                            <button className="btn btn-primary btn-sm"> <i className="fa fa-shopping-basket"></i> -</button>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-primary btn-sm"> <i className="fa fa-caret-right"></i> Detay</button>

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

        </>
    )
}
export default Orders

