import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Observation', value: 'Observation' },
        { label: 'Workshop', value: 'Workshop' },
        { label: 'Webinar', value: 'Webinar' },
        { label: 'Meetup', value: 'Meetup' },
        { label: 'Discussion', value: 'Discussion' },
        { label: 'Competition', value: 'Competition' },
        { label: 'Outreach', value: 'Outreach' },
        { label: 'Excursion', value: 'Excursion' },
        { label: 'Other', value: 'Other' },
      ],
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
      required: true,
    },
    {
      name: 'time',
      type: 'text', 
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea', 
      required: true,
    },
    {
      name: 'registrationLink',
      type: 'text',
      required: true,
    }
  ],
}