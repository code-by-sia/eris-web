import App from "./app"
import { createRoot } from 'react-dom/client'
import store from './store'
import { Provider } from "react-redux"

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)