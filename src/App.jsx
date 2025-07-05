import About from "./components/About"
import Contact from "./components/Contact"
import Download from "./components/Download/Download"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Home from "./components/Home"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsOfUse from "./components/TermsOfUse"


export function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: (
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      }, 
      // {
      //   path: '/promotion',
      //   element: <Promotion />
      // },
       {
        path: '/download',
        element: <Download />
      }, {
        path: '/about',
        element: <About />
      },{
        path: '/contact',
        element: <Contact/>
      },   {
        path: '/privacypolicy',
        element: <PrivacyPolicy/>
      },{
        path: '/terms',
        element: <TermsOfUse/>
      }, {
        path: '/login',
        // element: <Login />
      }, {
        path: '/signup',
        // element: <Signup />
      },

    ]
  }])

  return (
    <div>

      <RouterProvider router={router} />
    </div>
  )
}

export default App
