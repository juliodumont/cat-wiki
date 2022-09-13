import { configureStore } from '@reduxjs/toolkit';
import { catNewsApi } from '../services/catNewsApi';
export default configureStore({
  reducer: {
    [catNewsApi.reducerPath]: catNewsApi.reducer
  }
});
