import React from 'react'

interface DotGridProps {
  className?: string;
}

export function DotGrid({ className = '' }: DotGridProps) {
  const rows = 4;
  const cols = 7;
  const totalDots = rows * cols;
  
  return (
    <div 
      className={`grid gap-4 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: totalDots }).map((_, i) => (
        <div 
          key={i} 
          className="w-1.5 h-1.5 rounded-full bg-primary/30 backdrop-blur-sm"
        />
      ))}
    </div>
  )
}
