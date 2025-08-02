import { createBrowserRouter, RouterProvider } from "react-router";
import movieloader from "./loaders/unit/Movieloader";
import Home from "./pages/Home";
import Base from "./pages/Base";
import Base1 from "./pages/Base1";
import movieloader1 from "./loaders/unit/Movieloader1";
import { createContext, useRef, useState } from "react";
import Detailedmovie from "./components/Detailedmovie";
import Detailedmovieloader from "./loaders/unit/Detailedmovieloader";
import SearchMovie from "./pages/SearchMovie";
import SampleMovies from "./components/SampleMovies";
import Searchmovieloder from "./loaders/unit/Searchmovieloader";


const routes = [
  {
    path: '/',
    element: <Home />,
    hydrateFallbackElement: <div className="text-2xl text-cyan-200 font-bold p-2">Loading Data....</div>,
    children: [
      {
        path: '/',
        element: <Base/>,
        loader: movieloader,
        hydrateFallbackElement: <div className="text-2xl text-cyan-200 font-bold p-2">Loading Data....</div>,

      },
      {
        path: '/Base1',
        element: <Base1 />,
        loader: movieloader1,
        hydrateFallbackElement: <div className="text-2xl text-cyan-200 font-bold p-2">Loading Data....</div>,


      },
      {
        path: '/Searchmoviepage',
        element: <SearchMovie />,
        loader:Searchmovieloder,
        children: [
          {
            path: '/Searchmoviepage',
            element: <SampleMovies />,
            loader: movieloader,
            hydrateFallbackElement: <div className="text-2xl text-cyan-200 font-bold p-2">Loading Data....</div>,

          },

        ]
      }
    ]
  },
  {
    path: '/Detailed',
    element: <Detailedmovie />,
    loader: Detailedmovieloader,
    hydrateFallbackElement: <div className="text-2xl text-cyan-200 font-bold p-2">Loading Data....</div>,

  }
]

const Router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },

});


const App = () => {

  const [number,setnumber] = useState(0);
  const [isloading,setisloading] = useState(true);

  return <Loadingcontext.Provider value={{isloading,setisloading}}>
    <Moviecontext.Provider value={{number,setnumber}}>
    <RouterProvider
      router={Router}
      future={{
        v7_startTransition: true,
      }} />
  </Moviecontext.Provider>
  </Loadingcontext.Provider>


}

export const Moviecontext = createContext([]);
export const Loadingcontext = createContext();

export default App;