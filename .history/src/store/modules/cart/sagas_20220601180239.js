import { isAllOf } from "@reduxjs/toolkit";
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from "../../../services/api";
import { addToCartSuccess } from "./actions";

function* addToCart(action) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
])