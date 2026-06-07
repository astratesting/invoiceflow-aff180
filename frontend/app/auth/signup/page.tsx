'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isMagicLink, setIsMagicLink] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            company_name: companyName,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      if (data.user && !data.session) {
        setMessage('Check your email to confirm your account!')
      } else {
        router.push('/dashboard')
      }
    } catch (error: any) {
      setMessage(error.message || 'An error occurred during signup')
    } finally {
      setLoading(false)
    }
  }

  const handleMagicLinkSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          data: {
            full_name: fullName,
            company_name: companyName,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      setMessage('Check your email for the magic link to complete signup!')
    } catch (error: any) {
      setMessage(error.message || 'An error occurred sending the magic link')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900">Create Your Account</h1>
          <p className="text-gray-600 mt-2">Start your 14-day free trial today</p>
        </div>

        <div className="card">
          {/* Toggle between Email/Password and Magic Link */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setIsMagicLink(false)}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                !isMagicLink
                  ? 'bg-violet-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Email & Password
            </button>
            <button
              onClick={() => setIsMagicLink(true)}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                isMagicLink
                  ? 'bg-violet-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Magic Link
            </button>
          </div>

          <form onSubmit={isMagicLink ? handleMagicLinkSignup : handleSignup}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="input-field"
                placeholder="John Smith"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="input-field"
                placeholder="Acme Inc."
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
                placeholder="you@company.com"
              />
            </div>

            {!isMagicLink && (
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="input-field"
                  placeholder="Minimum 6 characters"
                />
              </div>
            )}

            {message && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                message.includes('Check your email')
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? 'Processing...'
                : isMagicLink
                ? 'Send Magic Link'
                : 'Create Account'
              }
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/auth/login" className="text-violet-600 hover:text-violet-700 font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-violet-600">
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  )
}
