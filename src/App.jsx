import { createBrowserRouter, RouterProvider } from "react-router";
import movieloader from "./loaders/unit/Movieloader";
import Home from "./pages/Home";
import Base from "./pages/Base";
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
        element: <Base />,
        loader: movieloader,
        hydrateFallbackElement: <div className="text-2xl text-cyan-200 font-bold p-2">Loading Data....</div>,

      },
      {
        path: '/Searchmoviepage',
        element: <SearchMovie />,
        loader: Searchmovieloder,
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

  const [number, setnumber] = useState(0);
  const [isloading, setisloading] = useState(true);
  const [gern, setgern] = useState(()=>{
    const storedGern = localStorage.getItem("Gern");
    return storedGern? storedGern:'';
  });
  const [year, setyear] = useState(()=>{
    const storedYear = localStorage.getItem('Year');
    return storedYear? storedYear:'';
  });
  const [movie, setmovie] = useState(()=>{
    const storedMovie = localStorage.getItem("Name");
    return storedMovie? storedMovie:''
  });

  return <Loadingcontext.Provider value={{ isloading, setisloading }}>
    <Moviecontext.Provider value={{ number, setnumber,setgern,setyear,setmovie,year,movie,gern}}>
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