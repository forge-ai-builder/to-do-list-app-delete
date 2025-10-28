import { Button } from '@/components/ui/button';
import { Minus, RotateCcw, Plus } from 'lucide-react';

interface CounterControlsProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export default function CounterControls({
  count,
  onIncrement,
  onDecrement,
  onReset,
}: CounterControlsProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Button
          onClick={onDecrement}
          disabled={count === 0}
          variant="outline"
          size="lg"
          className="flex-1 h-14 text-lg font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Decrement counter"
        >
          <Minus className="mr-2 h-5 w-5" />
          Decrement
        </Button>
        
        <Button
          onClick={onIncrement}
          variant="default"
          size="lg"
          className="flex-1 h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105"
          aria-label="Increment counter"
        >
          <Plus className="mr-2 h-5 w-5" />
          Increment
        </Button>
      </div>
      
      <Button
        onClick={onReset}
        variant="secondary"
        size="lg"
        className="w-full h-14 text-lg font-semibold transition-all hover:scale-105"
        aria-label="Reset counter to zero"
      >
        <RotateCcw className="mr-2 h-5 w-5" />
        Reset
      </Button>
    </div>
  );
}