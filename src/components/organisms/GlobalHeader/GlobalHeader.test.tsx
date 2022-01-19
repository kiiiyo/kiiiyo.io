import { render } from '@testing-library/react'

import { Organisms } from '@/components'

describe('Organisms: GlobalHeader component', () => {
  test('render', async () => {
    render(<Organisms.GlobalHeader state={{ currentPage: 'HOME' }} />)
  })
})
