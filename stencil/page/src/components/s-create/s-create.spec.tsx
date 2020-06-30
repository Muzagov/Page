import { newSpecPage } from '@stencil/core/testing';
import { SCreate } from './s-create';

describe('s-create', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SCreate],
      html: `<s-create></s-create>`,
    });
    expect(page.root).toEqualHtml(`
      <s-create>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-create>
    `);
  });
});
