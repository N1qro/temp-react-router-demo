import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

// Main
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import HostVanDetail from "./pages/HostVanDetail"

// /host
import Dashboard from "./pages/Host/index"
import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
import HostVans from "./pages/Host/Vans"

// /host/van
import Pricing from './pages/HostVanDetail/Pricing'
import Photos from './pages/HostVanDetail/Photos'

// Layouts
import PageLayout from "./layouts/PageLayout"
import HostLayout from "./layouts/HostLayout"
import Details from './pages/HostVanDetail/Details'

// Loaders
import { loader as VansLoader } from './pages/Vans/index'

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<PageLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={VansLoader} />
    <Route path="vans/:id" element={<VanDetail/>} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />}/>
      <Route path="reviews" element={<Reviews />}/>
      <Route path="income" element={<Income />}/>

      <Route path="vans" element={<HostVans />}/>

      <Route path="vans/:id" element={<HostVanDetail />}>
        <Route index element={<Details />}/>
        <Route path="pricing" element={<Pricing />} />
        <Route path="photos" element={<Photos />} />
      </Route>
    </Route>
    <Route path="*" element={<h1>Page not found!</h1>}/>
  </Route>
))


export default function App() {
  return <RouterProvider router={router} />
};
