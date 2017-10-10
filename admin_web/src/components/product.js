import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import styled from 'styled-components';
import * as Lang from '../lang/th-lang';
import * as Color from './helpers/color';
import { Title, PageContentSection, StyledLink, StyledTable } from './helpers';
import { fetchProduct } from '../actions';

class Product extends Component {
    componentDidMount() {
        this.props.fetchProduct();
    }

    renderProduct() {
        var index = 1;
        return _.map(this.props.products, (product) => {
            return (
                <tr key={product.id}>
                    <td><Link to={`/product/${product.id}`}>{index++}</Link></td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.type.name}</td>
                    <td>{`${product.price.major}.${product.price.minor || '00'} บาท`}</td>
                </tr>
            );
        });       
    }
    render() {
        return (
            <div className="container-fluid">
                <Title color={Color.label_title_text}>{Lang.lable_product}</Title>
                <PageContentSection>
                    <StyledLink color={Color.label_text_color} hoverColor={Color.label_text_hover}>
                        <Link id='add_product_type' to='/product/new'>{Lang.link_add}</Link>
                    </StyledLink>
                    <StyledTable color={Color.label_text_color}>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>{Lang.lable_product}</th>
                                <th>{Lang.lable_descripton}</th>
                                <th>{Lang.lable_product_type}</th>
                                <th>{Lang.lable_price}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProduct()}
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
        products: state.products
    }
}

export default connect(mapStateToProps, {fetchProduct})(Product);