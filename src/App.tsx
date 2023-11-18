import { Button } from 'shared/ui/inputs/Button';
import { ThemeProvider } from 'shared/providers/theme';

function App() {
  return (
    <ThemeProvider>
        <Button>
            Записаться
        </Button>
    </ThemeProvider>
  )
}

export default App
