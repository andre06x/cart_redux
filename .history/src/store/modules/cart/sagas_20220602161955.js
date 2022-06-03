import { isAllOf } from "@reduxjs/toolkit";
import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import api from "../../../services/api";
import { formatPrice } from "../../../util/format";
import { addToCartSuccess, updateAmountSuccess } from "./actions";
import { toast } from 'react-toastify';
import history from "../../../services/history";
//sempre que utilizar algum effect precisa utilizar o yield

function* addToCart({id}) {
  const productExists = yield select(
    state => state.todos.cart.find(p => p.id === id)
  )

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if(amount > stockAmount){
    console.tron.warn('ERRO');
    toast.error('Quantidade sem estoque');
    return;
  }
  if(productExists){
    const amount = productExists.amount + 1;
    yield put(updateAmountSuccess(id, amount))

  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    }
    yield put(addToCartSuccess(data));
    history.push('/cart')
  }

}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
])