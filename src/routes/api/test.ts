import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/test')({
  server: {
    handlers: {
      GET: () => json({ hello: 'world' }),
    },
  },
})
