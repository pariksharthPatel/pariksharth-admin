import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import ThemeProvider from "./theme/index";
import ScrollToTop from "./components/layout/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { useCancelApi } from "./hooks/useCancelApi";
import Snackbar from "./components/layout/snackbar";
import ImagePreviewModal from "./components/ImagePreviewModal";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
function App() {
  return (
    
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterMoment}>

          <Snackbar />
          <ImagePreviewModal />
          <ScrollToTop />
          <Router />
          </LocalizationProvider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
