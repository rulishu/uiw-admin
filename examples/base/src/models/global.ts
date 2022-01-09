import { createModel } from '@rematch/core';
import { Dispatch, RootModel } from './';

export interface GlobalState {
  test: string;
  [s: string]: any
}

export default createModel<RootModel>()({
  state: {
    test: '测试全局State',
  },
  reducers: {
    updateState: (state: GlobalState, payload: GlobalState) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch: any) => ({
    async verify() {
      const dph = dispatch as Dispatch;
      dph.global.updateState({ test: '测试2' });
    },
  }),
});
