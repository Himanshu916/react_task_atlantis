import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 justify-center items-center min-h-[90vh]">
      <h1 className="text-center text-6xl">
        Hey ! What do you want to explore ?
      </h1>

      <div className="flex gap-5 p-6 rounded-md border border-secondary2 items-center">
        <p>Want to explore map ? </p>
        <Button onClick={() => navigate("/map")} variation="primary">
          Go to Map
        </Button>
      </div>

      <div className="flex gap-5 p-6 rounded-md border border-secondary2 items-center">
        <p>Want to explore movies ? </p>
        <Button onClick={() => navigate("/movies")} variation="secondary">
          Go to Movies
        </Button>
      </div>
    </div>
  );
}

export default Home;
