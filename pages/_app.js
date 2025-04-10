import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      disable: "mobile",
    });
    AOS.refresh();

    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
     {loading && <div className="loading">Loading...</div>}
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
