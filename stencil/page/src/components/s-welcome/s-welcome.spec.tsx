import { newSpecPage } from '@stencil/core/testing';
import { SWelcome } from './s-welcome';

describe('s-welcome', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SWelcome],
      html: `<s-welcome></s-welcome>`,
    });
    expect(page.root).toEqualHtml(`
      <s-welcome>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-welcome>
    `);
  });
});
