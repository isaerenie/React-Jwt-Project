export interface IOrders {
    orderList: Array<OrderList[]>;
}

export interface OrderList {
    setproducts(arr: any): unknown;
    id:              null;
    sirket_id:       string;
    must_id:         string;
    urun_id:         null;
    siparis_bilgisi: string;
    eklenme_tarihi:  Date;
    id_sirket:       string;
    id_category:     string;
    urun_adi:        string;
    kisa_aciklama:   string;
    aciklama:        string;
    tarih:           Date;
    fiyat:           string;
    satis_tipi:      string;
    kampanya:        string;
    kampanya_baslik: string;
    kampanya_detay:  string;
    adi:             null;
    normal:          string;
    thumb:           string;
}
