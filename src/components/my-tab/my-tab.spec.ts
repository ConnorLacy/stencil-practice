import { newSpecPage } from '@stencil/core/testing';
import { MyTab } from './my-tab';

describe('my-component', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [MyTab],
      html: '<my-component></my-component>'
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [MyTab],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`
    });
    expect(root).toEqualHtml(`
      <my-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
