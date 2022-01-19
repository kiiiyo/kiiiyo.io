import { render } from '@testing-library/react'

import { Pages } from '@/components'

describe('Pages: AboutPage component', () => {
  test('render', async () => {
    render(<Pages.AboutPage />)
  })
})
