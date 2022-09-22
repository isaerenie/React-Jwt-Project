import { siteConfig } from "../configs/axiosConfig"
import { IOrders, OrderList } from "../models/IOrders"
import { IProducts, ProBilgiler } from "../models/IProduct"


export const productList = () => {
    const sendParams = {
        start: 0
    }
    return siteConfig.get<IProducts>("product.php", {params:sendParams})
}


export const  orderList= ( customerId:string, productId:string,html:string ) => {
    const sendParams = {
        customerId,productId,html
    }
    return siteConfig.get<IProducts>("orderForm.php", { params: sendParams })
}

export const  orders= ( musterilerID:string) => {
    const sendParams = {
        musterilerID
    }
    return siteConfig.get<IOrders>("orderList.php", { params: sendParams })
}
