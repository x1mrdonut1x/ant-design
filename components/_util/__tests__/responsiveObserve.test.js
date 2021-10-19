import ResponsiveObserve, { responsiveMap, getScreenMap } from '../responsiveObserve';

describe('Test ResponsiveObserve', () => {
  it('test ResponsiveObserve subscribe and unsubscribe', () => {
    const { xs } = responsiveMap;
    const subscribeFunc = jest.fn();
    const token = ResponsiveObserve.subscribe(subscribeFunc);
    expect(ResponsiveObserve.matchHandlers[xs].mql.matches).toBeTruthy();
    expect(subscribeFunc).toBeCalledTimes(1);

    ResponsiveObserve.unsubscribe(token);
    expect(ResponsiveObserve.matchHandlers[xs].mql.removeListener).toBeCalled();
  });

  it('should initialize screens with correct values', () => {
    const screens = getScreenMap();

    expect(screens).toMatchObject({
      xs: true,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false,
    });
  });
});
