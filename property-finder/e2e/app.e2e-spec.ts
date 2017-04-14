import { PropertyFinderPage } from './app.po';

describe('property-finder App', () => {
  let page: PropertyFinderPage;

  beforeEach(() => {
    page = new PropertyFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
