import Riwaayaat from "./riwaayaat";
import Tuhfa from "./tuhfa";
import Jazariyah from "./jazariyah";

let riwaayaat = [
  "Riwaayatu D-doore An Abee Amr",
  "Riwaayatu Soosee An Abee Amr",
  "Riwaayatu Qaloon An Naafi",
  "Riwaayatu Qunbul An Ibn Katheer",
  "Riwaayatu Bazzee An Ibn Katheer",
  "Riwaayatu D-dooree An Kisaaiy",
  "Riwaayatu Khalaf An Hamzah",
  "Riwaayatu Hafs An Aasim",
  "Riwaayatu Shu'bah An Aasim",
  "Riwaayatu Ibn Wirdan An Abee Jafar",
  "Riwaayatu Ibn Jammaaz An Abee Jafar",
  "Tuhfatul Atfal",
  "Matnu Jazariyah",
];

const Courses = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl lg:text-4xl my-5 font-bold">Available Courses</h1>
      <div className="flex justify-around">
        <Riwaayaat riwaayaat={riwaayaat}/>
        <Tuhfa/>
        <Jazariyah/>
      </div>
    </div>
  );
};

export default Courses;
