import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import CustomHook from "./page/customHook";
import UseLayoutEffect from "./page/useLayoutEffect";
import ReducerMateri from "./page/useReducer";
import UseRef from "./page/useRef";

function App() {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }} className="bg-red-500 text-white">
        Branch Materi Hook
      </h1>
      <section className="">
        <section className="my-5 space-x-3">
          <NavLink
            className="border border-green-500 rounded px-5 py-1 hover:bg-green-500 hover:text-white transition-all ease-in-out"
            to={"/useRef"}
          >
            useRef
          </NavLink>
          <NavLink
            className="border border-green-500 rounded px-5 py-1 hover:bg-green-500 hover:text-white transition-all ease-in-out"
            to={"/useReducer"}
          >
            useReducer
          </NavLink>
          <NavLink
            className="border border-green-500 rounded px-5 py-1 hover:bg-green-500 hover:text-white transition-all ease-in-out"
            to={"/useLayoutEffect"}
          >
            useLayoutEffect
          </NavLink>
          <NavLink
            className="border border-green-500 rounded px-5 py-1 hover:bg-green-500 hover:text-white transition-all ease-in-out"
            to={"/customHook"}
          >
            customHook
          </NavLink>
        </section>

        <Routes>
          {/* <Route path="/apa"/> */}
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useReducer" element={<ReducerMateri />} />
          <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
          <Route path="/customHook" element={<CustomHook />} />
          {/* <Route path="*" element={<Navigate to="/apa" replace={true} />} /> */}
        </Routes>
      </section>
    </React.Fragment>
  );
}

export default App;
