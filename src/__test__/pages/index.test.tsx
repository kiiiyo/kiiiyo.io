import { render, screen } from '@testing-library/react'

import TopPage from '../../pages/index'

describe('トップページのテスト', () => {
  test("'Welcome to Next.js!'が表示されているか", async () => {
    render(<TopPage />)

    const title = 'Welcome to Next.js!'

    expect(
      screen.getByText((_, node) => {
        if (!node) return false

        const nodeHasText = node.textContent === title
        const childrenDontHaveText = Array.from(node.children).every((child) => child.textContent !== title)

        return nodeHasText && childrenDontHaveText
      })
    ).toBeInTheDocument()
  })
})
