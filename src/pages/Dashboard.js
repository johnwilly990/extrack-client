import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DashboardInfo from "../components/Dashboard/DashboardInfo";
import ProfileNavBar from "../components/NavBar/ProfileNavBar";

const URL = process.env.REACT_APP_URL;

const Dashboard = () => {
  const authToken = sessionStorage.getItem("authToken");
  const [userData, setUserData] = useState({});
  const [failedAuth, setFailedAuth] = useState(false);
  const [counter, setCounter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await axios.get(`${URL}profile`, {
          headers: { Authorization: `Bearer: ${authToken}` },
        });
        setUserData(user.data);
        setFailedAuth(false);
      } catch {
        setFailedAuth(true);
      }
    };

    fetchData();
  }, [authToken, counter]);

  if (authToken === false) return setFailedAuth(true);

  return (
    <>
      <main className="lg:flex">
        {authToken && <ProfileNavBar registeredDate={userData.created_at} />}
        <DashboardInfo
          userData={userData}
          authToken={authToken}
          counter={counter}
          setCounter={setCounter}
          failedAuth={failedAuth}
        />
      </main>
    </>
  );
};

export default Dashboard;
