import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "/image/Group 5.svg"; // Ensure this is the correct path

const Login = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", backgroundColor: "#fff" }} // Adjust the background if needed
    >
      <Box
        height="20%"
        width="55%"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <img src={Logo} alt="logo" style={{ width: "70%", height: "auto" }} />
      </Box>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "30%",
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ color: "#34BCA8", fontWeight: "bold", mb: 3 }}
        >
          LOGIN
        </Typography>

        <FormControl
          fullWidth
          sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Typography sx={{ color: "#34BCA8" }}>Email*</Typography>
          <TextField id="email" variant="outlined" fullWidth />
        </FormControl>

        <FormControl
          fullWidth
          sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Typography sx={{ color: "#34BCA8" }}>Password*</Typography>
          <TextField
            id="password"
            type="password"
            variant="outlined"
            fullWidth
          />
        </FormControl>

        <Typography
          sx={{
            width: "100%",
            textAlign: "right",
            color: "#34BCA8",
          }}
        >
          Forget Password?
        </Typography>

        <Button
          sx={{
            backgroundColor: "#34BCA8",
            
            color: "white",
            width: "27rem",
            height: "3rem",
            fontWeight:"bold",
           
          }}
          variant="contained"
        >
          Login
        </Button>

        <Box sx={{ display: "flex", direction: "row", gap:1 }}>
          <Typography sx={{color:"#696F79"}}>Dont have an account?</Typography>

          <Typography sx={{ color: "#34BCA8" }}>Sign up here</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Login;
