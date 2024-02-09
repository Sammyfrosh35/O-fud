
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'



export const client  =   createClient ({
    projectId: "fmitb7g9",
    dataset: 'production',
    apiVersion: "2024-01-25",
    useCdn: true,
    token: "skXpkv1BJCmEPQdGq4ChRovZp8zy7aZ9N7c7zmKNJWSfiUOmOjZw2BMormOzRL30OyEUJ10VRxoBfPWgEWE1lBpfoNHYSkhQk3hX49F6BxI3TpAD4ClDAvKUR7QbR249gqkYfAON3trMU5YNz6lZy7wH1U0G7B8hGSX2OXFFJ6cVmqg2zcBw"

})


const builder = imageUrlBuilder(client) 





export const urlFor = (source) => { return builder.image(source)}















