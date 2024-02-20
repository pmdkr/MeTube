
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element: <Body/>,
      children:[
        {
          path:"/",
          element: <MainContainer/>
        },
        {
          path:"/watch",
          element:<WatchPage/>
        }
      ]
    },
    
  ]);
  return (
    <Provider store={store}>

    
    <div className="App">
      <Header/>
      <RouterProvider router={appRouter}/>


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
