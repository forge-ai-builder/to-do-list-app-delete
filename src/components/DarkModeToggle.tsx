import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

interface DarkModeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export default function DarkModeToggle({ darkMode, onToggle }: DarkModeToggleProps) {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 md:top-6 md:right-6 h-12 w-12 rounded-full shadow-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 transition-all hover:scale-110 z-50"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform rotate-0 scale-100" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-600 transition-transform rotate-0 scale-100" />
      )}
    </Button>
  );
}