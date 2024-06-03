import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-screen h-screen p-4 ">
      <header>
        <h1 className="text-4xl font-bold text-center">Framer Motion</h1>
      </header>
      <main className="w-full mx-auto mt-4 sm:w-2/3 lg:w-1/2">
        <ul className="list-disc ">
          <li>
            <Link to={"/start-using-animate"}>Start Using Animate</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
