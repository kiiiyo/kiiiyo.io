import { render } from '@testing-library/react'

import { Pages } from '@/components'

describe('Pages: ContactPage component', () => {
  test('render', async () => {
    render(<Pages.ContactPage />)
  })
})
