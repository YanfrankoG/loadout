import "./App.css";
import { Dashboard } from "./components/dashboard/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Product } from "./screens/Product/Product";
import { useEffect } from "react";
import { ProductsScreen } from "./screens/ProductsScreen/ProductsScreen";

export const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Dashboard />,
		},
		{
			path: "/products",
			element: <ProductsScreen />,
		},
		{
			path: "/products/:productId",
			element: <Product />,
		},
	]);

	useEffect(() => {
		// console.log(useLocati            on());
	});

	return (
		<>
			<RouterProvider router={router} />
			{/* <BrowserRouter>
        <Test />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cod" element={<CodProduct />} />
        </Routes>
      </BrowserRouter> */}
		</>
	);
};
