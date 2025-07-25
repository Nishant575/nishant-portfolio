// src/components/loading-spinner.tsx
export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="glass-card p-8 rounded-3xl">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white/20 border-t-blue-400 rounded-full animate-spin"></div>
          <p className="text-neutral-300">Loading...</p>
        </div>
      </div>
    </div>
  )
}
