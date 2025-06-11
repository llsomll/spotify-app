import { Box, styled } from '@mui/material';

const DefaultImage = styled(Box)(({ theme }) => ({
  backgroundColor: "#282828",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  width: "100%",       
  aspectRatio: "1",      
  maxWidth: 240,        
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",

//   [theme.breakpoints.down("md")]: {
//     maxWidth: 160,
//   },
}));

export default DefaultImage;
