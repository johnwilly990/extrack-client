import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OverviewInfo from "../components/Overview/OverviewInfo";
import ProfileNavBar from "../components/NavBar/ProfileNavBar";
import ExpensesInfo from "../components/Expenses/ExpensesInfo";
import ReportsInfo from "../components/Reports/ReportsInfo";
import { months } from "../constants";

const URL = process.env.REACT_APP_URL;

const Dashboard = () => {
  const date = new Date();
  const monthAtm = months[date.getMonth()];
  const restOfMonths = months.filter((current) => current !== monthAtm);
  const authToken = sessionStorage.getItem("authToken");
  const [currentMonth, setCurrentMonth] = useState(monthAtm);
  const [userData, setUserData] = useState({});
  const [failedAuth, setFailedAuth] = useState(false);
  const [counter, setCounter] = useState();
  const [currentPage, setCurrentPage] = useState("overview");
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

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
            currentPage={currentPage}
          />
        )}
        {currentPage === "expenses" && (
          <ExpensesInfo
            userData={userData}
            authToken={authToken}
            addModal={addModal}
            setAddModal={setAddModal}
            updateModal={updateModal}
            setUpdateModal={setUpdateModal}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            counter={counter}
            setCounter={setCounter}
            currentPage={currentPage}
            monthAtm={monthAtm}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
            restOfMonths={restOfMonths}
          />
        )}
        {currentPage === "reports" && (
          <ReportsInfo
            userData={userData}
            currentPage={currentPage}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
            restOfMonths={restOfMonths}
          />
        )}
      </main>
    </>
  );
};

export default Dashboard;
