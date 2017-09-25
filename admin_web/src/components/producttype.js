import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import styled from 'styled-components';
import * as Lang from '../lang/th-lang';
import * as Color from './helpers/color';
import { Title, PageContentSection, StyledLink, StyledTable } from './helpers';
import { fetchProductType } from '../actions';


class ProductType extends Component {

    componentDidMount() {
        this.props.fetchProductType();
    }

    renderProductTypes() {
        var index = 1;
        return _.map(this.props.productTypes, (productType) => {
            return (
                <tr key={productType.id}>
                    <td><Link to={`/producttype/${productType.id}`}>{index++}</Link></td>
                    <td>{productType.name}</td>
                    <td>{productType.description}</td>
                </tr>
            );
        });       
    }
    render() {
        return (
            <div className="container-fluid">
                <Title color={Color.label_title_text}>{Lang.lable_product_type}</Title>
                <PageContentSection>
                    <StyledLink color={Color.label_text_color} hoverColor={Color.label_text_hover}>
                        <Link id='add_product_type' to='/producttype/new'>{Lang.link_add}</Link>
                    </StyledLink>
                    <StyledTable color={Color.label_text_color}>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>{Lang.lable_product_type}</th>
                                <th>{Lang.lable_descripton}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProductTypes()}
                            </tbody>
                        </table>
                    </StyledTable>
                </PageContentSection>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productTypes: state.productTypes
    }
}

export default connect(mapStateToProps, {fetchProductType})(ProductType);