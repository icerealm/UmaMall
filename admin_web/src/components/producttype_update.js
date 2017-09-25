import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderInputField, renderInputTextAreaField } from './formhelpers';
import { PageContentSection, PageCommandSection, Card, Button } from './helpers';
import { fetchAProductType, updateProductType, deleteProductType } from '../actions';
import * as Lang from '../lang/th-lang';
import * as Color from './helpers/color';
import * as Validator from './formhelpers/validation';

class ProductTypeUpdate extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchAProductType(id);
    }

    onSubmit(values) {  
        const {id} = this.props.match.params;
        this.props.updateProductType(id, values, () => this.props.history.push('/producttype'));      
    }

    onDelete() {
        const {id} = this.props.match.params;
        const ret = window.confirm(Lang.msgDeletItemConfirmation(Lang.lable_product_type));
        if (ret) {
            this.props.deleteProductType(id, () => this.props.history.push('/producttype'));
        }
        
    }
    
    render() {
        const { handleSubmit } = this.props;
        return (
            <PageContentSection>
                <PageCommandSection>
                    <Button
                        bgcolor={Color.button_bg_color}
                        hoverColor={Color.button_hover}
                        onClick={this.onDelete.bind(this)}
                    >
                        {Lang.button_delete}
                    </Button>
                </PageCommandSection>
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
                        {Lang.button_edit}
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

const mapStateToProps = (state, ownProps) => {
    const {productTypes} = state;
    return {
        initialValues: productTypes[ownProps.match.params.id]
    };
}

const theform = reduxForm({
    validate,
    enableReinitialize: true,
    form: 'ProductTypeUpdateForm'   
})(ProductTypeUpdate);

export default connect(mapStateToProps, {fetchAProductType, updateProductType, deleteProductType})(theform);