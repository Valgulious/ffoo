import { Button } from 'shared/ui/inputs/Button';
import { ThemeProvider } from 'shared/providers/theme';
import { Input } from 'shared/ui/inputs/Input';

function App() {
  return (
    <ThemeProvider>
        <Button>
            Записаться
        </Button>
        <Input
            placeholder="Текст"
            errorMessage="Error"
        />
    </ThemeProvider>
  )
}

export default App
