import { Card, CardHeader, CardContent, CardTitle } from "@components/ui/card";
import { Car } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="relative h-44 w-full bg-gradient-to-t from-[#7694e1] to-[#5680E9] shadow-md">
        <div className="absolute -top-5 right-[10%] h-40 w-40 rounded-full bg-[#a7c0ff] opacity-20 z-0"></div>
        <div className="absolute top-[12%] left-[5%] h-24 w-24 rounded-full bg-[#8656ff] opacity-10 z-0"></div>
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 100 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C16.7,13.3 33.3,24 50,16.7 C66.7,9.3 83.3,20 100,15"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.2"
            fill="none"
          />
        </svg>

        <h1 className="font-bold text-blue-50 text-3xl font-sans pt-24 px-10 md:px-32 z-20">
          Welcome Back! Explorer!
        </h1>
      </div>
      <div className="w-auto grid grid-cols-1 mx-20 md:grid-cols-3 gap-4 p-4 font-sans text-blue-500">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg font-sans text-blue-500">
              Anime List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl border-b-2 w-fit pr-4 -mt-5 text-blue-600">
              42
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg font-sans text-blue-500">
              Saved Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl border-b-2 w-fit pr-4 -mt-5 text-blue-600">
              28
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg font-sans text-blue-500">
              Travel Plans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl border-b-2 w-fit pr-4 -mt-5 text-blue-600">
              3
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
