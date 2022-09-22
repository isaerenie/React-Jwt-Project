import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ProBilgiler } from '../models/IProduct'
import { orderList, orders } from '../services/productService'
import { control } from '../utils/control'


function Details() {
    const [basket, setBasket] = useState<ProBilgiler[]>([])
    const userid = control()?.user[0].bilgiler?.userId!
   
    const addToBasket = (item: ProBilgiler) => {
        orderList(userid,item.productId,item.productId).then(res=>{
            if (res.status) {
                toast.success("Ürün Eklendi", {
                    position: toast.POSITION.TOP_CENTER
                  });
                
            }else{
                toast.error("Ürün elenmedi!", {
                    position: toast.POSITION.TOP_CENTER
                  });
            }
        })
         
    }

    const [item, setItem] = useState<ProBilgiler>()
    const [bigImage, setBigImage] = useState('')
    const { pid } = useParams()
    const loc = useLocation()
    useEffect(() => {
        if (loc.state) {

            const itm = loc.state as ProBilgiler
            console.log(itm);

            setItem(itm)
            setBigImage(itm.images[0].normal)
        } else {

        }
    }, [])

    return (
        <>

            <div className="bg-secondary text-white p-2">
                <div className="container">
                    <h1 className="h5"><i className="fa fa-caret-right"></i> Detay</h1>
                </div>

            </div>

            <div className="container">
                {item &&
                    <>
                        <div className="text-right">

                        </div>
                        <div className=" row container my-3">

                            <h3> {item.productName} </h3>
                            <div className='col-sm-6'>
                                <img src={bigImage} className="img-fluid" />
                                <div>
                                    {item.images.map((item, index) =>
                                        <img key={index} role='button' onClick={() => setBigImage(item.normal)} src={item.thumb} className="img-thumbnail m-1" />
                                    )}
                                </div>
                                <button onClick={() => addToBasket(item)} className=" text-right btn btn-primary btn-sm float-end"> <i className="fa fa-shopping-basket"></i> Sepete Ekle</button>
                            </div>
                            <div className='col-sm-6'>
                                <div dangerouslySetInnerHTML={{ __html: item.description }} ></div>
                            </div>
                        </div>
                         
                    </>
                }
            </div>
        </>
    )
}

export default Details