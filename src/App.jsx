import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { registerLicense } from "@syncfusion/ej2-base";

function App() {
  registerLicense(
    "Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCe0x3QHxbf1x1ZFNMYlRbQXdPMyBoS35Rc0VmWXdednZdQ2FYV0ZzVEBU"
  );

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

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
                onClick={toggleDarkMode}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed bg-white p-4">Sidebar</div>
          ) : (
            <div className="w-0">Sidenar</div>
          )}
        </div>

        <div className={`bg-white min-h-screen w- ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          <div className={`fixed md:static bg-white w-full navbar text-black`}>
            Navbar
          </div>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
