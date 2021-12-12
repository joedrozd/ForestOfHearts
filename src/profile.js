import { useState } from "react";
export default function setEmail(obj) {
  localStorage.setItem(obj, "email");
}
