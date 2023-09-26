import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './12Router/Header';
import Home from './12Router/Home';
import About from './12Router/About';
import NotFound from './12Router/404';
import User from './12Router/User';
import Redirect from './12Router/Redirect';
import UserDetail from './12Router/UserDetail';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/user/:id" element={<UserDetail />} />
                    <Route path="/redirect" element={<Redirect />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
