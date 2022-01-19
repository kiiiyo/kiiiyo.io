import { render } from '@testing-library/react'

import { Pages } from '@/components'

describe('Pages: PortfolioCollectionPage component', () => {
  test('render', async () => {
    render(<Pages.PortfolioCollectionPage />)
  })
})
