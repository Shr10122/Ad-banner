import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

interface BannersState {
  banners: Banner[];
  loading: boolean;
}

const initialState: BannersState = {
  banners: [],
  loading: false,
};

const bannersSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {
    setBanners: (state, action: PayloadAction<Banner[]>) => {
      state.banners = action.payload;
    },
    updateBannerStart: (state) => {
      state.loading = true;
    },
    updateBannerSuccess: (state, action: PayloadAction<Banner>) => {
      const index = state.banners.findIndex((banner) => banner.id === action.payload.id);
      if (index !== -1) {
        state.banners[index] = action.payload;
      }
      state.loading = false;
    },
    updateBannerFailure: (state) => {
      state.loading = false;
    },
  },
});

export const { setBanners, updateBannerStart, updateBannerSuccess, updateBannerFailure } = bannersSlice.actions;
export default bannersSlice.reducer;
