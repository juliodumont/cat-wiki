import { configureStore } from '@reduxjs/toolkit';
import { catApi } from '../services/catApi';
export default configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer
  }
});
