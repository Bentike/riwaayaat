import Riwaayaat from "./riwaayaat";

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
      <h1 className="text-3xl my-8">Courses</h1>
      <div>
        <Riwaayaat riwaayaat={riwaayaat} />
      </div>
    </div>
  );
};

export default Courses;
