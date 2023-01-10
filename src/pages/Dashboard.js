import DashboardInfo from "../components/Dashboard/DashboardInfo";
import ProfileNavBar from "../components/NavBar/ProfileNavBar";

const Dashboard = () => {
  return (
    <>
      <main className="lg:flex">
        <ProfileNavBar />
        <DashboardInfo />
      </main>
    </>
  );
};

export default Dashboard;
