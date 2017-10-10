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
    if (!values.type) {
        errors.type = Lang.msgSpecifyValueWarning(Lang.lable_product_type)
    }
    if (!values.price_value) {
        errors.price_value = Lang.msgSpecifyValueWarning(Lang.lable_price)
    }
    return errors;
}