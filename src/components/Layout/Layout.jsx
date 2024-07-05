import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";

const Layout = () => {
  const loader = useSelector(selectLoading);
  return (
    <div>
      <AppBar />
      {loader && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ width: 80, margin: "0 auto" }}
          wrapperClass=""
        />
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;
