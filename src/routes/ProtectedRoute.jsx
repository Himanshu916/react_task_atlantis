import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { state } = useAuthContext();
  const { isAuthenticated } = state;
  const navigate = useNavigate();
  console.log(state, "in route");

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
