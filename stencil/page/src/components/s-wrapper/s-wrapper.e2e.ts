import { newE2EPage } from '@stencil/core/testing';

describe('s-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-wrapper></s-wrapper>');

    const element = await page.find('s-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
