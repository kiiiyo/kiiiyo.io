import { render } from '@testing-library/react'

import { Pages } from '@/components'

describe('Pages: HomePage component', () => {
  test('render', async () => {
    render(<Pages.HomePage />)
  })
})
