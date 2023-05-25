import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";

import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
