import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OverviewInfo from "../components/Overview/OverviewInfo";
import ProfileNavBar from "../components/NavBar/ProfileNavBar";

const URL = process.env.REACT_APP_URL;

const Dashboard = () => {
  const authToken = sessionStorage.getItem("authToken");
  const [userData, setUserData] = useState({});
  const [failedAuth, setFailedAuth] = useState(false);
  const [counter, setCounter] = useState();
  const [currentPage, setCurrentPage] = useState("overview");

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

  console.log(currentPage);

  if (authToken === false)
    return (
      <main className="flex flex-col justify-center items-center h-[100vh] w-full">
        <p className="text-lg text-green">
          You must be logged in to see this page.
        </p>
        <Link
          to="/login"
          className="flex justify-center items-center mt-3 mb-6 bg-green w-[200px] h-[40px] rounded uppercase hover:bg-forestGreen"
        >
          <p className="text-white">Go To Login</p>
        </Link>
      </main>
    );

  return (
    <>
      <main className="lg:flex">
        {authToken && (
          <ProfileNavBar
            registeredDate={userData.created_at}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "overview" && (
          <OverviewInfo
            userData={userData}
            authToken={authToken}
            counter={counter}
            setCounter={setCounter}
            failedAuth={failedAuth}
          />
        )}
      </main>
    </>
  );
};

export default Dashboard;
