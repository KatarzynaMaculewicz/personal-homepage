import { takeEvery } from "redux-saga/effects";
import { toggleTheme } from "./themeSlice";

function* onToggleTheme() {
  console.log("Motyw przełączony (saga działa)");
}

export default function* themeSaga() {
  yield takeEvery(toggleTheme.type, onToggleTheme);
}