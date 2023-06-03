import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-blue-300">
        <h1 className="font-semibold text-7xl">CRUD FULLSTACK</h1>
        <span className="mt-6 text-4xl font-semibold">ICC</span>
      </div>
    </>
  );
};

export default Home;
