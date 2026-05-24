import { supabase } from '../lib/supabase'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

export default function Index() {
  const [status, setStatus] = useState('Connecting...')

  useEffect(() => {
    supabase.from('profiles').select('*').then(({ error }) => {
      if (error) {
        setStatus('Supabase connected ✅ (no data yet)')
      } else {
        setStatus('Supabase connected ✅')
      }
    })
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{status}</Text>
    </View>
  )
}