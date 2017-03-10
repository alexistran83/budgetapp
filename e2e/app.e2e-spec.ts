import { BudgetappPage } from './app.po';

describe('budgetapp App', () => {
  let page: BudgetappPage;

  beforeEach(() => {
    page = new BudgetappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
