import { API_KEY, FOLDER_ID, GOOGLE_API } from "../constants/apis";

export const fetchFolders = async () => {
  const response = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType='application/vnd.google-apps.folder'+and+trashed=false&key=${API_KEY}`
  );

  const data = await response.json();
  return data.files;
};

export const fetchAllImages = async () => {
  const response = await fetch(
    `${GOOGLE_API}v3/files?q=mimeType contains 'image/' and trashed=false&fields=files(id,name,mimeType,parents)&key=${API_KEY}`
  );

  const data = await response.json();

  return data.files || [];
};
;
export const fetchImagesByFolderId = async (id:string) => {
    const response = await fetch(`${GOOGLE_API}v3/files?q='${id}'+in+parents+and+mimeType+contains+'image/'+and+trashed=false&fields=files(id,name,mimeType)&key=${API_KEY}`);
    const data = await response.json();
    return data;
}
  ;

export const fetchFirstImages = async (folderId:string) => {
  const response = await fetch(
    `${GOOGLE_API}v3/files
    ?q='${folderId}'+in+parents+and+mimeType+contains+'image/'+and+trashed=false
    &orderBy=createdTime desc
    &pageSize=1
    &fields=files(id,name)
    &key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

// export const fetchImagesById = async (ids: string | string[]) => {
//   const idArray = Array.isArray(ids) ? ids : [ids]

//   if (!idArray.length) return { files: [] }

//   const parentQuery = idArray
//     .map((id) => `'${id}' in parents`)
//     .join(" or ")

//   const query = `(${parentQuery}) and mimeType contains 'image' and trashed=false`

//   const url = `${GOOGLE_API}v3/files?q=${encodeURIComponent(
//     query
//   )}&fields=files(id,name,mimeType)&key=${API_KEY}`

//   const response = await fetch(url)

//   if (!response.ok) {
//     const error = await response.json()
//     console.error("Drive API Error:", error)
//     throw new Error(error.error?.message)
//   }

//   return response.json()
// }