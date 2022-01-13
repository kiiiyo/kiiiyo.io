import { render, screen } from '@testing-library/react'

import { Pages } from '@/components'

describe('HomePage component', () => {
  test('render', async () => {
    render(<Pages.HomePage />)
  })
})
