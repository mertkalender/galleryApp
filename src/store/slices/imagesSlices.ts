import {createAction, createSlice, PrepareAction} from '@reduxjs/toolkit';
import {Image} from '../../service/types/images';

interface ImagesList {
  images: Image[];
  loading: boolean;
}

export interface ImagesState {
  listData: ImagesList;
}

const initialState: ImagesState = {
  listData: {
    images: [],
    loading: false,
  },
};

export const setImages = createAction<PrepareAction<ImagesList>>(
  'images/setImages',
  images => ({
    payload: images,
  }),
);

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setImages, (state, action) => {
      state.listData = action.payload;
    });
  },
});

export default imagesSlice.reducer;
