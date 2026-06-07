'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AuthCallbackPage() {
  const router = useRouter()
  const [message, setMessage] = useState('Confirming your authentication...')
  const [error, setError] = useState('')

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()

        if (error) throw error

        if (data.session) {
          setMessage('Authentication successful! Redirecting...')
          setTimeout(() => {
            router.push('/dashboard')
          }, 1000)
        } else {
          // Check for auth code in URL
          const hashParams = new URLSearchParams(window.location.hash.substring(1))
          const accessToken = hashParams.get('access_token')

          if (accessToken) {
            const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: hashParams.get('refresh_token') || '',
            })

            if (sessionError) throw sessionError

            setMessage('Authentication successful! Redirecting...')
            setTimeout(() => {
              router.push('/dashboard')
            }, 1000)
          } else {
            setError('No session found. Please try signing in again.')
          }
        }
      } catch (err: any) {
        console.error('Auth callback error:', err)
        setError(err.message || 'An error occurred during authentication')
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="card">
          {!error ? (
            <>
              <div className="mb-4">
                <div className="w-16 h-16 border-4 border-violet-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
              <h2 className="text-xl font-display font-semibold text-gray-900 mb-2">
                {message}
              </h2>
              <p className="text-gray-600">Please wait while we verify your credentials...</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-xl font-display font-semibold text-gray-900 mb-2">Authentication Failed</h2>
              <p className="text-red-600 mb-6">{error}</p>
              <a href="/auth/login" className="btn-primary inline-block">
                Back to Sign In
              </a>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
