import { useState, useEffect } from "react";
import axios from "axios";
import DashboardInfo from "../components/Dashboard/DashboardInfo";
import ProfileNavBar from "../components/NavBar/ProfileNavBar";

const URL = process.env.REACT_APP_URL;

const Dashboard = () => {
  const authToken = sessionStorage.getItem("authToken");
  const [userData, setUserData] = useState({});
  const [failedAuth, setFailedAuth] = useState(false);
  const [remainingIncome, setRemainingIncome] = useState(0);
  const [counter, setCounter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await axios.get(`${URL}profile`, {
          headers: { Authorization: `Bearer: ${authToken}` },
        });
        setUserData(user.data);
        setRemainingIncome(user.data.budget_amount);
        setFailedAuth(false);
      } catch {
        setFailedAuth(true);
      }
    };

    fetchData();
  }, [authToken, counter]);

  return (
    <>
      <main className="lg:flex">
        <ProfileNavBar registeredDate={userData.created_at} />
        <DashboardInfo userData={userData} authToken={authToken} />
      </main>
    </>
  );
};

export default Dashboard;
