import { Angular2CoursesPage } from './app.po';

describe('angular2-courses App', function() {
  let page: Angular2CoursesPage;

  beforeEach(() => {
    page = new Angular2CoursesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
