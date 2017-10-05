import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import { renderInputField, renderInputTextAreaField, renderDropdownField, renderDropzoneInput, convert_to_price_obj } from './formhelpers';
import { PageContentSection, PageCommandSection, Button, Card, SubTitleSection } from './helpers';
import { fetchProductType, saveProduct } from '../actions';
import * as Lang from '../lang/th-lang';
import * as Color from './helpers/color';
import * as Validator from './formhelpers/validation';

 

class ProductNew extends Component {
    
    componentDidMount() {
        this.props.fetchProductType();
    }

    onSubmit(values) {        
        let form = new FormData();
        form.append("name", values.name);
        form.append("description", values.description);
        form.append("type", JSON.stringify(this.props.productTypes[values.type]));
        form.append("price", JSON.stringify(convert_to_price_obj(values.price_value)))
        _.map(values.images, (image, index) => {
                form.append(`image_${index}`, image)
            }
        )
        this.props.saveProduct(form), () => console.log("save successfully");
    }

    onFileSubmit(files) {
        console.log(files.value);
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
        );
    }
}

const validate = Validator.validateProduct;

const theform = reduxForm({
    validate,
    form: 'ProductNewForm'   
})(ProductNew);

const mapStateToProps = (state, ownProps) => {
    return {
        productTypes: state.productTypes
    }
}

export default connect(mapStateToProps, { fetchProductType, saveProduct })(theform);