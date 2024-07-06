import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";
import css from "../Layout/Layout.module.css";

const Layout = () => {
  const loader = useSelector(selectLoading);
  return (
    <div>
      <AppBar />
      <div className={css.wrapper}>
        {loader && (
          <ThreeDots
            visible={true}
            height="80"
            width="100"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;
