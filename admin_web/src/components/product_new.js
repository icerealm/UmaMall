import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import Dropzone from 'react-dropzone'
import { renderInputField, renderInputTextAreaField, renderDropdownField } from './formhelpers';
import { PageContentSection, Button } from './helpers';
import { fetchProductType, saveProduct } from '../actions';
import * as Lang from '../lang/th-lang';
import * as Color from './helpers/color';
import * as Validator from './formhelpers/validation';


const renderDropzoneInput = (field) => {
    const files = field.input.value;
    return (
      <div>
        <Dropzone
          name={field.name}
          onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
        >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        {field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span>}
        {files && Array.isArray(files) && (
          <ul>
            { files.map((file, i) => <li key={i}>{file.name}</li>) }
          </ul>
        )}
      </div>
    );
}  

class ProductNew extends Component {
    
    componentDidMount() {
        this.props.fetchProductType();
    }

    onSubmit(values) {        
        this.props.saveProduct(values, () => this.props.history.push('/product'));
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
                </form>
                <div>
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
                </div>
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