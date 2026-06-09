// app/not-found.tsx
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-inter">
      <main className="w-full flex-grow py-12 px-4 max-w-5xl mx-auto">
        <div className="text-start max-w-2xl mb-10">
            <h1 className="text-3xl font-black text-slate-900 sm:text-4xl mb-3 leading-tight tracking-tight">Page Not Found</h1>
            <p className="text-slate-600 text-md leading-relaxed">The page you are looking for does not exist.</p>
        <Link href="/" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:translate-x-[-4px]" />
          <span>Return Home</span>
        </Link>
        </div>
      </main>
    </div>
  )
}