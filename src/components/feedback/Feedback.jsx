import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Feedback.css"
const Feedback = ({text1, text2}) => {
  return (<div>
    <div className="feedback mb-[80px] rounded-[8px] ">
        <h1 className='pt-[20px] pb-[30px] pl-[13px]'>{text1}</h1>
        <div className="flex items-center gap-1">
            <div>
            <AccountCircleIcon sx={{fontSize:"40px"}}/>
            </div>
            <div>
                <h1>{text2}</h1>
                <StarIcon sx={{color:"#00B67A"}}/>
                <StarIcon sx={{color:"#00B67A"}}/>
                <StarIcon sx={{color:"#00B67A"}}/>
                <StarIcon sx={{color:"#00B67A"}}/>
                <StarIcon sx={{color:"#00B67A"}}/>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Feedback