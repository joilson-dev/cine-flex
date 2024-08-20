import Header from "./components/Header"
import GlobalStyle from "./global-styles"
import AppRoutes from "./router/AppRoutes"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </>
  )
}

export default App
