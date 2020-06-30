import { newSpecPage } from '@stencil/core/testing';
import { SInput } from './s-input';

describe('s-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SInput],
      html: `<s-input></s-input>`,
    });
    expect(page.root).toEqualHtml(`
      <s-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-input>
    `);
  });
});
