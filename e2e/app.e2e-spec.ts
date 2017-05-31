import { CodevolutionPage } from './app.po';

describe('codevolution App', () => {
  let page: CodevolutionPage;

  beforeEach(() => {
    page = new CodevolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
