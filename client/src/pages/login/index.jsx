import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";


const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box width='100%' backgroundColor={theme.palette.background.alt} p='1rem 6%' textAlign='center'>
        <Typography
          fontWeight='bold'
          fontSize='32px'
          color="primary"
        >
          LaSocialPP
        </Typography>
      </Box>
      <Box width={isNonMobileScreens ? "50%" : "93%"} m='2rem auto' p='1.5rem' borderRadius='1.5rem' backgroundColor={theme.palette.background.alt}>
        <Typography fontWeight='500' variant='h5' sx={{ mb: "1.5rem" }}>
          Welcome to LaSocialPP, the Social Media for Developers
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}

export default Login