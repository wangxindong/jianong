import { JianongPage } from './app.po';

describe('jianong App', function() {
  let page: JianongPage;

  beforeEach(() => {
    page = new JianongPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
