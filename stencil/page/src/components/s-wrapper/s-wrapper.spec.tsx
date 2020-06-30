import { newSpecPage } from '@stencil/core/testing';
import { SWrapper } from './s-wrapper';

describe('s-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SWrapper],
      html: `<s-wrapper></s-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <s-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-wrapper>
    `);
  });
});
