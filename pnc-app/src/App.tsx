
import React from "react";
import {
  Box,
  Button,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
  TextField,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

function App() {
    
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper
          elevation={3}
          sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
        >
          <Typography color="primary.dark" variant="h1">
            Check Prime Number
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '55ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Enter numbers seprated with ," variant="outlined" />
            <Button variant="contained">Submit</Button>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;