import { CryptoCurrencyTrackerPage } from './app.po';

describe('crypto-currency-tracker App', () => {
  let page: CryptoCurrencyTrackerPage;

  beforeEach(() => {
    page = new CryptoCurrencyTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
