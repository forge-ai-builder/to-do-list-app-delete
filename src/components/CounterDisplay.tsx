interface CounterDisplayProps {
  count: number;
}

export default function CounterDisplay({ count }: CounterDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide">
        Current Count
      </p>
      <div className="relative">
        <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300 ease-out">
          {count}
        </div>
        <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 blur-sm opacity-50 animate-pulse">
          {count}
        </div>
      </div>
    </div>
  );
}