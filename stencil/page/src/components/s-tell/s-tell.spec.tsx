import { newSpecPage } from '@stencil/core/testing';
import { STell } from './s-tell';

describe('s-tell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [STell],
      html: `<s-tell></s-tell>`,
    });
    expect(page.root).toEqualHtml(`
      <s-tell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-tell>
    `);
  });
});
