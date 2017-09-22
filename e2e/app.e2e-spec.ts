import { AngularPipe2Page } from './app.po';

describe('angular-pipe2 App', () => {
  let page: AngularPipe2Page;

  beforeEach(() => {
    page = new AngularPipe2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
