import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useAuth();

  if (loading || isAdminLoading) {
    return (
      <div className="flex flex-col py-52 justify-center items-center">
        <span className="loading  text-red-400 loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default AdminRoute;
