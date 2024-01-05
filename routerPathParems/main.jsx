import React from "react";
import ReactDOM from "react-dom/client";
/* import CounterClass from "./Features/Day-8/CounterClass.jsx";
import ParentV2 from "./Features/Day-17/6.parentv2.jsx";
import ProductListWithFilterss from "./Features/1-Oct/NitinQues.jsx";

import WithoutUseMemoExample from "./Features/2-Oct/1.withOutUseMemoExample.jsx";
import Lifecycle from "./Features/2-Oct/2.Lifecycle.jsx";
import CounterFC from "./Features/Day-8/CounterFC.jsx";
import ParentV1 from "./Features/Day-17/3.parentv1.jsx";
import RegisterProfileFC from "./Features/Day-8/RegisterProfile.jsx";
import FormV1 from "./Features/Day-9/1.Forms.jsx";
import FormV2 from "./Features/Day-9/2.FormV2.jsx";
import FormsV3 from "./Features/Day-9/3.FormV3.jsx";
import PrevVsNormal from "./Features/13Sept/1.prevStateVsNormal.jsx";
import MissleDashboard from "./Features/14 Sept/MissileDashboard.jsx";
import ParentCounter from "./Features/Day-10/1.parent-counter.jsx";
import ParentUI from "./Features/Day-11/1.parent-ui.jsx";
import ParentInput from "./Features/Day-11/4.parent-input.jsx";
import Mounting from "./Features/Day-12/1.mounting.jsx";
import SearchExample from "./Features/Day-12/2.search-example.jsx";
import APIWithUseEffect from "./Features/Day-12/3.api-with-useEffect.jsx"; */
/* import ProductList from "./Features/Day-13/1.product-list.jsx";
import ArrayMap from "./Features/Day-13/2.array-map.jsx";
import ColorUI from "./Features/13Sept/2.Colors.jsx"; */
/* import ProductListWithFilters from "./Features/Day-14/1.product-list-with-filters.jsx";
 import ProductListWithFiltersV2 from "./Features/Day-14/2.product-list-with-filters-v2.jsx";
import Pract from "./Features/14 Sept/Comp.jsx"; 
import { Prctsss } from "./Features/25-Sept/useEffectIssue.jsx";
import ParentDay15 from "./Features/Day-15/1.Parent.jsx";
import ParentDay15B from "./Features/Day-15B/1.Parent.jsx";
import ParentV2 from "./Features/Day-15B/5.parent-v2.jsx";
import RefExample from "./Features/26-Sept/1.ref-example.jsx"; 
import WithoutUseMemo from "./Features/Day-16/1.without-useMemo.jsx";
import CounterWithUseEffect from "./Features/Day-16/2.with-useEffect.jsx"; 
import CounterWithUseMemo from "./Features/Day-16/3.with-useMemo.jsx"; 
import ProductListWithFiltersWithOutUseMemo from "./Features/Day-16/4.product-list-with-filters.jsx"; 
import ProductListWithFiltersWithUseMemo from "./Features/Day-16/5.product-list-with-filters-with-useMemo.jsx";
import CodeFlowV1 from "./Features/Day-17/1.code-flow.jsx";
import { FormDay17V2 } from "./Features/Day-17/2.withoutUseMemoExample.jsx"; */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Features/Day-18 - Routing/Home.jsx";
import Contact from "./Features/Day-18 - Routing/contact.jsx";
import About from "./Features/Day-18 - Routing/About.jsx";
import ProductList from "./Features/Day-19 RoutingV2-PathParams/1.products-list.jsx";
import ProductDetails from "./Features/Day-19 RoutingV2-PathParams/2.product-details.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
  {
    path: "/product-details/:productId",
    element: <ProductDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    {/* <div style={{ display: "none" }}>
      <CounterClass />
      <hr />
      <CounterFC />
      <hr />
      <RegisterProfileFC />
      <hr />
      <FormV1 />
      <hr />
      <FormV2 />
      <hr />
      <FormsV3 />
      <PrevVsNormal />
      <MissleDashboard />
      <ParentCounter />
      <ParentUI />
      <ParentInput />
      <Mounting />
      <SearchExample />
      <APIWithUseEffect />
      <ProductList />
    <ArrayMap />
    <ColorUI />
    <ProductListWithFilters />
    <ProductListWithFiltersV2 />
    <Prctsss />
    <Pract />
    <ParentDay15 />
    <ParentDay15B />
    <ParentV2 />
    <RefExample />
    <WithoutUseMemo />
    <CounterWithUseEffect />
    <CounterWithUseMemo />
    <ProductListWithFiltersWithOutUseMemo />
    <ProductListWithFiltersWithUseMemo />
    <CodeFlowV1 />
    <FormDay17V2 />
    <ParentV1 />
    <ParentV2 />
    <WithoutUseMemoExample />
    <ProductListWithFilterss />
    <Lifecycle />
    </div> */}

    <RouterProvider router={myRouter} />
  </React.Fragment>
);
