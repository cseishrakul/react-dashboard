import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  Area,
  Bar,
  Calender,
  ColorMapping,
  ColorPicker,
  Customer,
  Ecommerce,
  Editor,
  Employee,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from "./pages/index";

import { Navbar, Footer, ThemeSettings, Sidebar } from "./components/index";
import { useStateContext } from "./context/ContextProvider";

function App() {
  registerLicense(
    "ORg4AjUWIQA/Gnt2XFhhQlJHfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH5WdENiXXtadH1TRmheWkZ/"
  );

  const { activeMenu } = useStateContext();

  return (
    <div className="">
      <BrowserRouter>
        <div className="flex relative bg-[--main-dark-bg]">
          <div className="fixed right-4 bottom-4">
            <TooltipComponent content="Settings" position="Top">
              <button
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-gray-300 text-white cursor-pointer"
                type="button"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed bg-white shadow-lg p-4">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 hidden">Sidebar</div>
          )}
        </div>

        <div
          className={`bg-white min-h-screen w- ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className={`fixed md:static bg-white w-full navbar text-black`}>
            <Navbar />
          </div>
          <div className="">
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employee />} />
              <Route path="/customers" element={<Customer />} />

              {/* Apps */}

              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calender />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
