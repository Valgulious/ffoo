import { ThemeProvider } from 'shared/providers/theme';
import { RegistrationPage } from 'pages/RegistrationPage';

function App() {
  return (
    <ThemeProvider>
        <RegistrationPage />
    </ThemeProvider>
  )
}

export default App
