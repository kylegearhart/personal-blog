import { BlogHomePage } from './app.po';

describe('workspace-project App', () => {
  const blogHomePage = new BlogHomePage();

  beforeEach(() => {
    blogHomePage.navigateTo()
  });

  it('should display blog title', () => {
    expect(blogHomePage.getTitleText()).toEqual('Kyle Gearhart');
  });
});
