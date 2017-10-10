import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { renderInputField, renderInputTextAreaField, renderDropdownField, renderDropzoneInput, convert_to_price_obj } from './formhelpers';
import { PageContentSection, PageCommandSection, Button, Card, SubTitleSection, Label } from './helpers';
import { fetchProductType, fetchAProduct, getProductImages } from '../actions';
import * as Lang from '../lang/th-lang';
import * as Color from './helpers/color';
import * as Validator from './formhelpers/validation';

class ProductUpdate extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchProductType();        
        this.props.fetchAProduct(id);
        this.props.getProductImages(id);
    }

    onSubmit(values) {        
        let form = new FormData();
        form.append("name", values.name);
        form.append("description", values.description || '');
        form.append("type", JSON.stringify(this.props.productTypes[values.type]));
        form.append("price", JSON.stringify(convert_to_price_obj(values.price_value)))
    }

    onFileSubmit(files) {
        let data = new FormData();
    }

    render() {
        const { handleSubmit } = this.props;
        let data = _.map(this.props.productTypes, productType => {
            return productType;
        });
        return (           
            <PageContentSection>
                <form onSubmit={ handleSubmit((this.onSubmit.bind(this))) }>
                    <Field 
                        displayLabel={Lang.lable_product}
                        type="text"
                        name="name"
                        component={renderInputField}
                        maxLength={50}
                    />
                    <Field 
                        displayLabel={Lang.lable_descripton}
                        type="text"
                        name="description"
                        component={renderInputTextAreaField}
                        maxLength={500}
                    />
                    <Field 
                        displayLabel={Lang.lable_price}
                        type="number"
                        name="price_value"
                        component={renderInputField}
                    />
                    <Field 
                        displayLabel={Lang.lable_product_type}
                        type="select"
                        name="type"
                        data={data}
                        component={renderDropdownField}
                    />
                    <Card>
                        <Field 
                            name="images"
                            color={Color.label_text_color}
                            component={renderDropzoneInput}
                            fileHandler={this.onFileSubmit.bind(this)}
                        />
                    </Card>
                </form>

                <SubTitleSection style={{"marginTop": "1em"}} color={Color.label_text_color}>
                    {Lang.lable_saved_file}:
                </SubTitleSection>
                <ul>
                    {(_.map(this.props.binData, binData => {
                            return <li key={binData.id}>{`${binData.fileName}.${binData.fileType}`}</li>
                        }
                    ))}
                </ul>
                <PageCommandSection>
                    <Button onClick={ handleSubmit(this.onSubmit.bind(this)) } 
                        bgcolor={Color.button_bg_color}
                        hoverColor={Color.button_hover} 
                    >
                        {Lang.button_add}
                    </Button>
                    &nbsp;
                    <Button onClick={ () => this.props.history.push('/product') } 
                        bgcolor={Color.button_bg_color}
                        hoverColor={Color.button_hover} 
                    >
                        {Lang.button_back}
                    </Button>
                </PageCommandSection>
            </PageContentSection>
        )
    }
}

const validate = Validator.validateProduct;

const theform = reduxForm({
    validate,
    form: 'ProductUpdateForm'   
})(ProductUpdate);

const mapStateToProps = (state, ownProps) => {
    const {products} = state;
    const selected_product = products[ownProps.match.params.id];

    const form_value = selected_product != null && selected_product != undefined ?
        {id: selected_product.id, 
        name: selected_product.name, 
        description: selected_product.description,
        type: selected_product.type.id,
        price_value: selected_product.price.major + (selected_product.price.minor/100)} : selected_product
    
    return {
        productTypes: state.productTypes,
        binData: state.binData,
        initialValues: form_value        
    }
}

export default connect(mapStateToProps, { fetchProductType, fetchAProduct, getProductImages })(theform);