import {ProductType} from "../../models/ProductType";

const database = window.localStorage;

export default function useProductDao() {

    function insert(value: ProductType) {
        const data = database.getItem('products');

        if (data === null) {
            const newData: Array<ProductType> = [];
            newData.push(value);
            database.setItem('products', JSON.stringify(newData));
        } else {
            const convertDataToString: Array<ProductType> = JSON.parse(data);
            convertDataToString.push(value);
            database.setItem('products', JSON.stringify(convertDataToString))
        }
    }

    function selectAll(): ProductType[] {
        const data = database.getItem('products');
        if (data === null) {
            return [];
        } else {
            const convertDataToProduct: Array<ProductType> = JSON.parse(data);
            return convertDataToProduct;
        }
    }

    return {
        insert,
        selectAll
    }
}
