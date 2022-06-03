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

const Home = ({ dispatch, addToCart }) => {
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

  const handleAddProduct = product => {
    addToCart(product);
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

          <button onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}

    </ProductList>
  );
};

const mapDispatchToProps = dispatch => {
  bindActionCreators(CartActions, dispatch)
}

export default connect("", mapDispatchToProps)(Home);
