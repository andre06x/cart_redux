import React from "react";
import { ProductList } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { formatPrice } from "../../util/format";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions  from '../../store/modules/cart/actions';

const Home = ({ dispatch, addToCart, amount }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("products");

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))

      setProducts(data);
    };
    getData();
  }, []);

  const handleAddProduct = id => {
    addToCart(id);
  };

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img
            src={product.image}
            alt={product.title}
          />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> {' '}
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}

    </ProductList>
  );
};

const mapStateToProps = state => ({
  amount: state.todos.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    
    return amount;
  }, {})
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
