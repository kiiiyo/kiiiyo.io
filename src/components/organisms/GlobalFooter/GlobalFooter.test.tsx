import { render } from '@testing-library/react'

import { Organisms } from '@/components'

describe('Organisms: GlobalFooter component', () => {
  test('render', async () => {
    render(<Organisms.GlobalFooter />)
  })
})
