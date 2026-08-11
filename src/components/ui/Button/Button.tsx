import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
  icon?: React.ReactNode
}

export function Button({ variant = 'primary', children, icon, className = '', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-colors"
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-secondary text-white hover:bg-secondary-hover",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="w-5 h-5">{icon}</span>}
    </motion.button>
  )
}
