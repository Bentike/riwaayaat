import Courses from "./components/courses";
import Header from "./components/header";
import Subscription from "./components/subscription";

export default function Home () {
    return(
      <div>
        <Header/>
        <Courses/>
        <Subscription/>
      </div>
    );
};