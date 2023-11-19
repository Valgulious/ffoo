import { Button } from 'shared/ui/inputs/Button';
import { ThemeProvider } from 'shared/providers/theme';
import { Input } from 'shared/ui/inputs/Input';
import { Select } from 'shared/ui/inputs/Select';

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
        <Select />
    </ThemeProvider>
  )
}

export default App
