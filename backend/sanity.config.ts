import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'malenki.dev',

  projectId: '2knfm5ci',
  dataset: 'showcase',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
