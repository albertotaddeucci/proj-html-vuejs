import { reactive } from 'vue'
import specialtiesJson from './data/specialties.json'

export const store = reactive({

    specialties: specialtiesJson,

    navbarLinks: [
        "home",
        "pages",
        "blog",
        "shop",
        "events",
        "elements"
    ]



});