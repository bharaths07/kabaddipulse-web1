import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseKey) {
  console.error('CRITICAL: Supabase credentials (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are missing in .env file.')
}

// Initializing with empty strings as fallback to prevent immediate crash, 
// though actual requests will fail until keys are provided.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseKey || 'placeholder-key'
)
