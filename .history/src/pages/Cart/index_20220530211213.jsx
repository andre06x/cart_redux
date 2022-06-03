import React from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";
import { Container, ProductTable, Total } from "./styles";
import { connect } from "react-redux";

const Cart = () => {
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
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-feminino/06/NQQ-6922-006/NQQ-6922-006_detalhe1.jpg?ts=1612439270?ims=280x280"
                alt=""
              />
            </td>

            <td>
              <strong>Tênis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$260,28</strong>
            </td>

            <td>
              <button>
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
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

export default connect()(Cart);
