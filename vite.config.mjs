import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import $monacoEditorPlugin from 'vite-plugin-monaco-editor';
const monacoEditorPlugin = $monacoEditorPlugin.default ?? $monacoEditorPlugin;

export default defineConfig({
  plugins: [
    react(),
    monacoEditorPlugin({
      languageWorkers: ['editorWorkerService', 'json'],
      customWorkers: [
        {
          label: 'graphql',
          entry: 'monaco-graphql/esm/graphql.worker.js',
        },
      ],
    }),
  ],
});
