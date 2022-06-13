import { useRouter } from 'next/router'
import React from 'react'

export default function Details() {
    const router = useRouter()
    const id = router.query.details

  return (
    <div>This is a details page {id} </div>
  )
}
