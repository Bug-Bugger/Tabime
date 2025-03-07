import { Card, CardHeader, CardContent, CardTitle } from "@components/ui/card";
import { ClipboardList, MapPinCheck, Plane } from "lucide-react";

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

        <h1 className="font-bold text-blue-50 text-3xl font-sans pt-24 px-10 md:px-32 z-20 motion-preset-slide-right">
          Welcome Back! xxx!
        </h1>
      </div>
      <div className="w-auto mx-5 md:mx-20 p-4">
        <div className="w-auto grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-blue-500">
          <Card className="w-full motion-opacity-in-0 motion-translate-y-in-50 motion-blur-in-md">
            <CardHeader>
              <CardTitle className="text-lg font-sans text-blue-500 flex">
                <div className="rounded-full bg-blue-100 flex items-center justify-center w-7 h-7 mr-2">
                  <ClipboardList size={20} className="text-blue-500 " />
                </div>
                Anime List
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl border-b-2 w-fit ml-9 pr-4 -mt-5 text-blue-600">
                42
              </div>
            </CardContent>
          </Card>
          <Card className="w-full motion-opacity-in-0 motion-delay-100/translate motion-translate-y-in-50 motion-blur-in-md ">
            <CardHeader>
              <CardTitle className="text-lg font-sans text-blue-500 flex">
                <div className="rounded-full bg-blue-100 flex items-center justify-center w-7 h-7 mr-2">
                  <MapPinCheck size={20} className="text-blue-500 " />
                </div>
                Saved Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl border-b-2 w-fit ml-9 pr-4 -mt-5 text-blue-600">
                28
              </div>
            </CardContent>
          </Card>
          <Card className="w-full motion-opacity-in-0 motion-delay-150/translate motion-translate-y-in-50 motion-blur-in-md">
            <CardHeader>
              <CardTitle className="text-lg font-sans text-blue-500 flex">
                <div className="rounded-full bg-blue-100 flex items-center justify-center w-7 h-7 mr-2">
                  <Plane size={20} className="text-blue-500 " />
                </div>
                Travel Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl border-b-2 w-fit ml-9 pr-4 -mt-5 text-blue-600">
                3
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="my-6">
          <h1 className="font-bold text-blue-500 text-2xl font-sans border-b-4 w-fit border-blue-300 motion-preset-slide-right">
            Anime Lists
          </h1>
        </div>
        <div className="my-6">
          <h1 className="font-bold text-blue-500 text-2xl font-sans border-b-4 w-fit border-blue-300 motion-duration-1000 motion-preset-slide-right">
            Travel Plans
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
