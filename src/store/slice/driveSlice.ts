import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFolders, fetchImagesByFolderId } from "../../hooks/events";

// Async thunk
export const loadData = createAsyncThunk(
  "drive/datas",
  async (_, { rejectWithValue }) => {
    try {
      // 1️⃣ Fetch all folders
      const folders = await fetchFolders();

      // 2️⃣ Fetch images for all folders in parallel
      const folderImagesArray = await Promise.all(
        folders.map(async (folder) => {
          const imgFiles = await fetchImagesByFolderId(folder.id);

          // Map images to id + name
          const images = imgFiles.files.map((img: any) => ({
            id: img.id,
            name: img.name,
          }));

          // console.log(`Images for folder ${folder.name}:`, images);

          return {
            parentFolderId: folder.id,
            parentFolderName: folder.name,
            images,
          };
        })
      );

      // console.log("folderImagesArray", folderImagesArray);

      // 3️⃣ Return folders + their images
      return { folders, folderImagesArray };
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const driveSlice = createSlice({
  name: "drive",
  initialState: {
    files: { status: "idle", data: null, error: null },
    folders: {status: "idle", data: null, error: null },
    foldersData: { status: "idle", data: null, error: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(loadData.pending, (state) => {
        state.files.status = "loading";
        state.folders.status = "loading";
      })
      // Fulfilled
      .addCase(loadData.fulfilled, (state, action) => {
        state.files.status = "succeeded";
        state.files.data = action.payload.folderImagesArray; // corrected

        state.folders.status = "succeeded";
        state.folders.data = action.payload.folders;
      })
      // Rejected
      .addCase(loadData.rejected, (state, action) => {
        state.files.status = "failed";
        state.files.error = action.payload || action.error.message;

        state.folders.status = "failed";
        state.folders.error = action.payload || action.error.message;
      });
  },
});

export default driveSlice.reducer;
