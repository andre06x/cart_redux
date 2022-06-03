import React from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
import { Container, ProductTable, Total } from "./styles";
import { connect } from "react-redux";
import * as CartActions  from '../../store/modules/cart/actions';
import { bindActionCreators } from "redux";
import { formatPrice } from "../../util/format";

const Cart = ({ cart, dispatch, removeFromCart, updateAmount }) => {

  function increment(product){
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product){
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
            <td>
              <img
                src={product.image}
                alt={product.title}
              />
            </td>

            <td>
              <strong>{product.title}</strong>
              <span>{product.price.formatted}</span>
            </td>
            <td>
              <div>
                <button onClick={() => decrement(product)}>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={product.amount} />
                <button onClick={() => increment(product)}>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>{product.subtotal}</strong>
            </td>

            <td>
              <button onClick={() => removeFromCart(product.id)}>
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
};

const mapStateToProps = state => ({
  cart: state.todos.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount)
  }))
})

const mapDispatchToProps = dispatch => 
  bindActionCreators(CartActions, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
