import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderInputField, renderInputTextAreaField } from './formhelpers';
import { PageContentSection, Card, Button } from './helpers';
import { saveProductType } from '../actions';
import * as Lang from '../lang/th-lang';
import * as Color from './helpers/color';
import * as Validator from './formhelpers/validation';


class ProductTypeNew extends Component {

    onSubmit(values) {        
        this.props.saveProductType(values, () => this.props.history.push('/producttype'));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <PageContentSection>
                <form onSubmit={ handleSubmit((this.onSubmit.bind(this))) }>
                    <Field 
                        displayLabel={Lang.lable_product_type}
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
                </form>
                <div>
                    <Button onClick={ handleSubmit(this.onSubmit.bind(this)) } 
                        bgcolor={Color.button_bg_color}
                        hoverColor={Color.button_hover} 
                    >
                        {Lang.button_add}
                    </Button>
                    &nbsp;
                    <Button onClick={ () => this.props.history.push('/producttype') } 
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

const validate = Validator.validateProductType;

const theform = reduxForm({
    validate,
    form: 'ProductTypeNewForm'   
})(ProductTypeNew);


export default connect(null, { saveProductType })(theform);