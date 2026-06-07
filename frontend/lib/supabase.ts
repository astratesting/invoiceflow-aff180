import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Invoice = {
  id: string
  created_at: string
  updated_at: string
  user_id: string
  client_id: string
  client_name: string
  client_email: string
  amount: number
  due_date: string
  status: 'draft' | 'sent' | 'viewed' | 'paid' | 'overdue' | 'negotiating'
  invoice_number: string
  line_items: LineItem[]
  notes?: string
  payment_plan_id?: string
  discount_percent?: number
}

export type LineItem = {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

export type PaymentPlan = {
  id: string
  invoice_id: string
  installments: number
  discount_percent: number
  status: 'pending' | 'approved' | 'active' | 'completed'
  installment_schedule: Installment[]
}

export type Installment = {
  id: string
  due_date: string
  amount: number
  status: 'pending' | 'paid'
}

export type FollowUpSequence = {
  id: string
  invoice_id: string
  trigger_condition: 'days_before_due' | 'on_due_date' | 'days_after_due' | 'on_view' | 'on_overdue'
  trigger_value: number
  message_template: string
  status: 'active' | 'paused' | 'completed'
  sent_at?: string
}

export type NegotiationRequest = {
  id: string
  invoice_id: string
  type: 'payment_plan' | 'early_payment_discount'
  requested_installments?: number
  requested_discount?: number
  message?: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
}
