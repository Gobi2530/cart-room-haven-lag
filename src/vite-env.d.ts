
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly MONGODB_URI: string
  readonly MONGODB_DB_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
