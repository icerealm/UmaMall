import * as Lang from '../../lang/th-lang';


export function validateProductType(values) {
    const errors = {};
    if (!values.name || (values.name && values.name.trim().length == 0)) {
        errors.name = Lang.msgSpecifyValueWarning(Lang.lable_product_type)
    }
    return errors;
}

export function validateProduct(values) {
    const errors = {};
    if (!values.name || (values.name && values.name.trim().length == 0)) {
        errors.name = Lang.msgSpecifyValueWarning(Lang.lable_product)
    }
    console.log(values.type)
    if (!values.type || (values.type && values.type.trim().length == 0)) {
        console.log('errr')
        errors.type = Lang.msgSpecifyValueWarning(Lang.lable_product_type)
    }
    if (!values.price_value || (values.price_value && values.price_value.trim().length == 0)) {
        errors.price_value = Lang.msgSpecifyValueWarning(Lang.lable_price)
    }
    return errors;
}