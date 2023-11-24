import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'


// From https://v5.reactrouter.com/web/guides/scroll-restoration
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // When clicking on a link, it will scroll up
    window.scrollTo(0, 0);

    // When going back or refreshing the page, it scrolls up
    window.history.scrollRestoration = 'manual';
  }, [pathname]);

  return null;
}
// From https://v5.reactrouter.com/web/guides/scroll-restoration


// function IntersectionObserver() {
//   const options = { threshold: 0.9 };
//   const observer = new IntersectionObserver( (entries: IntersectionObserverEntry[]) => {
//     entries.forEach( (entry) => {
//       console.log('hi');
//     });
//   })


// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop/>
      <App/>
    </HashRouter>
  </React.StrictMode>,
)
