import { newE2EPage } from '@stencil/core/testing';

describe('s-tell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-tell></s-tell>');

    const element = await page.find('s-tell');
    expect(element).toHaveClass('hydrated');
  });
});
