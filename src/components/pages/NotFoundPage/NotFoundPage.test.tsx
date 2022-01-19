import { render } from '@testing-library/react'

import { Pages } from '@/components'

describe('Pages: NotFoundPage component', () => {
  test('render', async () => {
    render(<Pages.NotFoundPage />)
  })
})
