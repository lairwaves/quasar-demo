/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly V_API_BASE_URL: string
  readonly V_THEME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
