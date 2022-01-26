import { medicineData } from "./medicinedata";
import { loadFromLocal } from "../../lib/localStorage"
import { useState, useEffect } from "react";

export default function Testfile () {
const [state, setState] = useState([]);
  console.log(state)

  useEffect(() => {
  if (loadFromLocal("_products")){
setState(medicineData)
  }
   
  }, []);
  return (
  <p>Test</p>
  )
}

