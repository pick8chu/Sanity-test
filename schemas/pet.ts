// schemas/pet.js
export default {
  name: 'pet',
  type: 'document',
	title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type'
    },
    {
      name: 'weight',
      type: 'number',
      title: 'weight'
    }
  ]
}