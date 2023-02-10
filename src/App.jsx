import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/global/TopBar";

function App() {
  const [theme, colorMode] = useMode();
  const [count, setCount] = useState(0);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <main className="content">
              <TopBar />
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
