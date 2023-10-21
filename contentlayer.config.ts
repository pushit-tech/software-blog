// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    state: { type: 'string', required: false },
  },
  computedFields: {
    url: { 
      type: 'string', 
      resolve: (post) => `/posts/complete/${post._raw.sourceFileDir}` 
    },
  },
}))

export default makeSource({ 
  contentDirPath: 'posts', 
  documentTypes: [Post] 
})