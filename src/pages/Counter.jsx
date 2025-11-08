// import { useState, useEffect } from "react";

// export const Counter = () => {

//   const [mantra, setMantra] = useState(() => {
//     try {
//       return localStorage.getItem("mantra") || "";
//     } catch {
//       return "";
//     }
//   });

//   const [tempMantra, setTempMantra] = useState("");

//   const [count, setCount] = useState(() => {
//     try {
//       const saved = localStorage.getItem("count");
//       return saved ? JSON.parse(saved) : 0;
//     } catch {
//       return 0;
//     }
//   });

//   const [customStart, setCustomStart] = useState("");
//   useEffect(() => {
//     if (!localStorage.getItem("mantra")) {
//       setMantra("");
//     }
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("mantra", mantra);

//     localStorage.setItem("count", JSON.stringify(count));
//   }, [mantra, count]);

//   const increment = () => setCount((prev) => prev + 1);
//   const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
//   const reset = () => setCount(0);

//   const applyCustomStart = () => {
//     const num = parseInt(customStart, 10);
//     if (!isNaN(num)) {
//       setCount(num);
//       setCustomStart("");
//     }
//   };

//   const applyMantra = () => {
//     if (tempMantra.trim() !== "") {
//       setMantra(tempMantra.trim());
//       setTempMantra("");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
//       <h1 class="text-3xl font-extrabold text-center text-gray-900">
//         JUSTchant
//       </h1>

//       <p className="text-sm text-gray-500 mb-4">Meditate with intention</p>

//       {/* Display Mantra */}
//       <div className="bg-white shadow-sm rounded-xl px-8 py-4 text-center mb-6 border border-gray-200 w-full max-w-md">
//         <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
//           Your Mantra
//         </p>
//         <p className="italic text-lg">{mantra || ""}</p>
//       </div>

//       <div className="flex w-full max-w-md mb-8 gap-2">
//         <input
//           type="text"
//           placeholder="Enter your mantra..."
//           value={tempMantra}
//           onChange={(e) => setTempMantra(e.target.value)}
//           className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
//         />
//         <button
//           onClick={applyMantra}
//           className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
//         >
//           Set
//         </button>
//       </div>

//       <div className="flex flex-col items-center mb-6">
//         <div className="w-36 h-36 rounded-full border border-gray-300 flex items-center justify-center text-5xl font-semibold text-gray-900 mb-4">
//           {count}
//         </div>

//         <div className="flex gap-4">
//           <button
//             onClick={decrement}
//             className="w-12 h-12 rounded-full border border-gray-400 text-2xl flex items-center justify-center hover:bg-gray-200 transition"
//           >
//             −
//           </button>
//           <button
//             onClick={increment}
//             className="w-12 h-12 rounded-full bg-gray-900 text-white text-2xl flex items-center justify-center hover:bg-gray-800 transition"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       {/* Custom Start Count */}
//       <div className="w-full max-w-md mb-6">
//         <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
//           Custom Start Count
//         </p>
//         <div className="flex gap-2">
//           <input
//             type="number"
//             placeholder="e.g., 108"
//             value={customStart}
//             onChange={(e) => setCustomStart(e.target.value)}
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
//           />
//           <button
//             onClick={applyCustomStart}
//             className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
//           >
//             Set
//           </button>
//         </div>
//       </div>

//       <button
//         onClick={reset}
//         className="w-full max-w-md bg-white border border-gray-300 py-3 rounded-lg hover:bg-gray-100 font-medium"
//       >
//         Reset to 0
//       </button>
//     </div>
//   );
// };














import { useState, useEffect } from "react";

export const Counter = () => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const theme = localStorage.getItem("theme");
      if (theme) return theme === "dark";
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((p) => !p);

  const [mantra, setMantra] = useState(() => {
    try {
      return localStorage.getItem("mantra") || "radha";
    } catch {
      return "";
    }
  });

  const [tempMantra, setTempMantra] = useState("");
  const [count, setCount] = useState(() => {
    try {
      const saved = localStorage.getItem("count");
      return saved ? JSON.parse(saved) : 0;
    } catch {
      return 0;
    }
  });
  const [customStart, setCustomStart] = useState("");

  useEffect(() => {
    localStorage.setItem("mantra", mantra);
    localStorage.setItem("count", JSON.stringify(count));
  }, [mantra, count]);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);
  
  const applyCustomStart = () => {
    const num = parseInt(customStart, 10);
    if (!isNaN(num) && num >= 0) {
      setCount(num);
      setCustomStart("");
    }
  };
  
  const applyMantra = () => {
    if (tempMantra.trim() !== "") {
      setMantra(tempMantra.trim());
      setTempMantra("");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 text-black dark:bg-black dark:text-white pt-10 pb-20 px-4 transition-colors duration-500 relative">
      
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 text-3xl p-1 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-900 transition-colors z-10"
        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? "🌙" : "☀️"}
      </button>

      <h1 className="text-4xl font-extrabold text-center mb-1">
        JUSTchant
      </h1>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Meditate with intention
      </p>

      <div className="bg-transparent border border-black dark:border-white shadow-sm rounded-xl px-8 py-4 text-center mb-6 w-full max-w-md">
        <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
          YOUR MANTRA
        </p>
        <p className="italic text-lg text-black dark:text-white font-medium">
          {mantra.toLowerCase() || ""} 
        </p>
      </div>

      <div className="flex w-full max-w-md mb-8 gap-2">
        <input
          type="text"
          placeholder="Enter your mantra..."
          value={tempMantra}
          onChange={(e) => setTempMantra(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-black dark:border-white dark:bg-black dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white"
        />
        <button
          onClick={applyMantra}
          className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition font-medium"
        >
          Set
        </button>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="w-40 h-40 rounded-full border border-black dark:border-white flex items-center justify-center text-6xl font-semibold text-gray-900 dark:text-white mb-6 transition-all duration-300">
          {count}
        </div>

        <div className="flex gap-6">
          <button
            onClick={decrement}
            className="w-14 h-14 rounded-full border border-black dark:border-white text-3xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-neutral-900 transition font-light"
            aria-label="Decrement counter"
          >
            −
          </button>
          <button
            onClick={increment}
            className="w-14 h-14 rounded-full bg-black dark:bg-white text-white dark:text-black text-3xl flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 transition font-light"
            aria-label="Increment counter"
          >
            +
          </button>
        </div>
      </div>

      <div className="w-full max-w-md mb-6">
        <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
          CUSTOM START COUNT
        </p>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="e.g., 108"
            value={customStart}
            onChange={(e) => setCustomStart(e.target.value.replace(/[^0-9]/g, ''))}
            className="flex-1 px-4 py-2 border border-black dark:border-white rounded-lg dark:bg-black dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 dark:focus:ring-white"
          />
          <button
            onClick={applyCustomStart}
            className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition font-medium"
          >
            Set
          </button>
        </div>
      </div>

      <button
        onClick={reset}
        className="w-full max-w-md bg-white dark:bg-black border border-black dark:border-white py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 font-medium transition mb-12"
      >
        Reset to 0
      </button>

      <div className="text-center text-sm text-gray-800 dark:text-gray-300 absolute bottom-4 w-full px-4 max-w-md">
          <span className="text-yellow-400">🌟</span> गोपसुवेशं दास निखिलं राधारमणं हरे हरे <span className="text-yellow-400">🌟</span>
      </div>
    </div>
  );
};