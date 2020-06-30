import { newE2EPage } from '@stencil/core/testing';

describe('s-welcome', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-welcome></s-welcome>');

    const element = await page.find('s-welcome');
    expect(element).toHaveClass('hydrated');
  });
});
