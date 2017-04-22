import { KauppalistaPage } from './app.po';

describe('kauppalista App', () => {
  let page: KauppalistaPage;

  beforeEach(() => {
    page = new KauppalistaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
