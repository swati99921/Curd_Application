import {Box,Typography} from '@material-ui/core';
import {makestyles } from '@material-ui/core';

import manage from '../Asses/AssesImage/Management.jpg';



import manget from '../Asses/AssesImage/Management2.jpg';


// const useStyle = makestyles({
//     image:{
//         width:"50%",
//         hight:"50%"
//     }
// })



const Codefor =() =>{
    // const classes = useStyle();
    return(

      <Box styele={{margin:50,fontSize:'20px'}} >
          <Typography varient='h2' style={{margin:50,fontSize:'35px'}} >code for Interview</Typography>

        <Box style={{display:'flex'}}>
            <img  src={manage} style={{width:'50%',height:'50%'}}/>
            <img  src={manget} style={{width:'50%',height:'50%'}}/>
        </Box>

        </Box>
      
    );
}
export default Codefor;