import { Feather } from '@expo/vector-icons'
import React from 'react'
import { TextInput, View } from 'react-native'

export default function Search() {
  return (
<View className='gap-2 px-4  flex-row border border-slate-500  w-full mt-4 rounded-full h-14 items-center'>
              <Feather name='search' size={24} color="#64748b"/>
              <TextInput placeholder='pesquisar por comida ...' className='w-full h-full'/>
</View>
  )
}
