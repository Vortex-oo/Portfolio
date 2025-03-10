const ErrorFallback = ({ error, resetError }) => {
  return (
    <div className="min-h-screen w-full bg-[#1e2125] text-[#e9dfce] font-[Serif] 
      flex flex-col justify-center items-center gap-6 px-4">
      
      {/* Error Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
        font-bold italic text-[#B5514D]">
        Oops!
      </h1>

      {/* Error Message */}
      <div className="text-center">
        <p className="text-xl sm:text-2xl md:text-3xl mb-4">
          Something went wrong
        </p>
        <pre className="font-mono text-sm sm:text-base md:text-lg 
          bg-[#2a2e35] p-4 rounded-lg overflow-auto max-w-[90vw]">
          {error.message}
        </pre>
      </div>

      {/* Try Again Button */}
      <button 
        onClick={(e)=>{
          window.location.reload()
        }}
        className="mt-6 px-8 py-3 text-lg sm:text-xl
          bg-[#B5514D] text-[#e9dfce] rounded-lg
          hover:bg-[#943f3c] transition-colors duration-300
          font-mono font-bold"
      >
        Try again
      </button>
    </div>
  )
}

export default ErrorFallback