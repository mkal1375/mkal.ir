import React from "react"

const Container = ({
  children,
  maxWidth = "1200px",
  style,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`container ${className}`}
      style={{ ...style, maxWidth }}
    >
      {children}
    </div>
  )
}

export default Container
