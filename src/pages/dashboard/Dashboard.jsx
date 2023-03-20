import { Link } from "react-router-dom";
import QuizIcon from '@mui/icons-material/Quiz';
import GroupIcon from '@mui/icons-material/Group';


function SideBar() {
  return <div>
    <div className="sideBar">
      <div className="w-[300px] bg-[#7575F6] dark:bg-[yellow] text-center pt-[70px] h-[100vh] overflow-hidden">
        <Link to={"/dashboard/test"}>

        <h1 className="text-[white] dark:text-[black] text-[40px] mb-[30px]  dark:hover:bg-[#4FC87A] hover:bg-[yellow] hover:text-[black]">Test <QuizIcon sx={{fontSize:"40px"}}/></h1>
        
        </Link>
        
        <Link to={"/dashboard/users"}>
        <h1 className="text-[white] dark:text-[black] text-[40px] dark:hover:bg-[#4FC87A] hover:bg-[yellow] hover:text-[black]">Users <GroupIcon sx={{fontSize:"40px"}}/></h1>
        </Link>
      </div>
    </div>
  </div>
}
export default SideBar;
