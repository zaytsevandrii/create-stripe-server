import "./App.css"
import NavbarComponent from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Success from "./pages/Success"
import Store from "./pages/Store"
import Cancel from "./pages/Cancel"
import CartProvider from "./CartContext"

function App() {
    return (
        <CartProvider>
            <Container>
                <NavbarComponent></NavbarComponent>
                <BrowserRouter>
                    <Routes>
                        <Route path="/create-stripe-server" element={<Store />} />
                        <Route path="success" element={<Success />} />
                        <Route path="cancel" element={<Cancel />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </CartProvider>
    )
}

export default App
