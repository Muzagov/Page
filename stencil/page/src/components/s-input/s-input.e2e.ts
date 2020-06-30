import { newE2EPage } from '@stencil/core/testing';

describe('s-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-input></s-input>');

    const element = await page.find('s-input');
    expect(element).toHaveClass('hydrated');
  });
});
