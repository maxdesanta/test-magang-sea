import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { slideApi } from "../api/slideApi";
import { topNewsApi } from "../api/topNewsApi";
import { todayNewsApi } from "../api/todayNewsApi";
import { newsApi } from "../api/newsApi";
import { cnnApi } from "../api/cnnApi";

const initialState = {
  topNews: [],
  todayNews: [],
  sliderNews: [],
  newsData: [],
  status: "idle",
  error: null,
};

export const fetchHomepageData = createAsyncThunk(
  "news/fetchHomepageData",
  async (_, { rejectWithValue }) => {
    try {
      const [sliderResponse, topNewsResponse, todayNewsResponse] =
        await Promise.all([slideApi(), topNewsApi("top-news"), todayNewsApi()]);

      return {
        sliderNews: sliderResponse || [],
        topNews: topNewsResponse || [],
        todayNews: todayNewsResponse || [],
      };
    } catch (error) {
      return rejectWithValue(error.message || "Gagal memuat berita");
    }
  },
);

export const fetchNewsPageData = createAsyncThunk(
  "news/fetchNewsPageData",
  async ({ endpoint }, { rejectWithValue }) => {
    try {
      let response;
      if (endpoint === "kumparan-news") {
        response = await newsApi();
      } else if (
        endpoint === "otomotif" ||
        endpoint === "politik" ||
        endpoint === "Tekno" ||
        endpoint === "ekonomi"
      ) {
        response = await topNewsApi(endpoint);
      } else {
        response = await cnnApi(endpoint);
      }

      return response || [];
    } catch (error) {
      return rejectWithValue(error.message || "Gagal memuat berita");
    }
  },
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomepageData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchHomepageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sliderNews = action.payload.sliderNews;
        state.topNews = action.payload.topNews;
        state.todayNews = action.payload.todayNews;
      })
      .addCase(fetchHomepageData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchNewsPageData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchNewsPageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newsData = action.payload;
      })
      .addCase(fetchNewsPageData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearNewsError } = newsSlice.actions;
export default newsSlice.reducer;
