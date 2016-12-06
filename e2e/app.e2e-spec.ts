import { WpNg2Page } from './app.po';

describe('wp-ng2 App', function() {
  let page: WpNg2Page;

  beforeEach(() => {
    page = new WpNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
