export interface Folder {
  id: string;
  name: string;
  kind: string | null;
  mimeType: string |null;
}[]

export interface File{
  id: string | null;
  mimeType: string | null;
  name: string | null;
}[]

export interface DriveState {
  folders: Record<string, Folder>;
  files: Record<string, File>;
  folderToFiles: Record<string, string[]>;
  loading: boolean;
}