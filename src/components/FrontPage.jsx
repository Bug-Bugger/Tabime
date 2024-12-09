import Landing from "./Landing";
import Description from "./Description";
import MeshGradientBackground from "./MeshGradientBackground";

const FrontPage = () => {
  return (
    <div className="w-full">
      <Landing />
      <MeshGradientBackground />
      <Description />
    </div>
  );
};

export default FrontPage;
