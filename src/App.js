import Header from './components/Header';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchKeywordPage from './components/SearchKeywordPage.js';
import Error from './components/Error';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Header />
        <Body />
      </>,
      children: [
        {
          path: "/",
          element: <MainContainer />,
          errorElement: <Error />
        },
        {
          path: "/watch",
          element: <WatchPage />,
          errorElement: <Error />
        },
        {
          path: "/search",
          element: <SearchKeywordPage />
        }
      ],
      errorElement: <Error />
    },

  ]);
  return (
    <Provider store={store}>


      <div className="App">
        <RouterProvider router={appRouter} />

        {/* {
        Header
        Body
        Sidebar

        Main container
        button list
      } */}
      </div>
    </Provider>
  );
}

export default App;
