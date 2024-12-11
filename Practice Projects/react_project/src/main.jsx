import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './Form.jsx'
import ProductList from './ProductList.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Form /> */}
    <ProductList />
  </StrictMode>,
)
