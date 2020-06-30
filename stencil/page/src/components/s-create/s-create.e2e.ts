import { newE2EPage } from '@stencil/core/testing';

describe('s-create', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-create></s-create>');

    const element = await page.find('s-create');
    expect(element).toHaveClass('hydrated');
  });
});
