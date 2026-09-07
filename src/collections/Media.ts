import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Events', value: 'events' },
        { label: 'Current Team', value: 'team' },
        { label: 'Past Team', value: 'past_team' },
        { label: 'General', value: 'general' },
      ],
      defaultValue: 'events',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}