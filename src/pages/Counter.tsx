import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import CounterDisplay from '@/components/CounterDisplay';
import CounterControls from '@/components/CounterControls';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => Math.max(0, prev - 1));
  const handleReset = () => setCount(0);
  const handleToggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 p-4">
      <DarkModeToggle darkMode={darkMode} onToggle={handleToggleDarkMode} />
      
      <Card className="w-full max-w-md p-8 md:p-12 shadow-2xl bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
            Counter App
          </h1>
          
          <CounterDisplay count={count} />
          
          <CounterControls
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onReset={handleReset}
          />
        </div>
      </Card>
    </div>
  );
}