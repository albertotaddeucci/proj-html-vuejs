import { reactive } from 'vue'
import specialtiesJson from './data/specialties.json'
import eventsJson from './data/events.json'


export const store = reactive({

    specialties: specialtiesJson,

    events: eventsJson,

    navbarLinks: [
        "home",
        "pages",
        "blog",
        "shop",
        "events",
        "elements"
    ],

    clients: [
        {
            name: "client1",
            image: "/img/h4-clients-img-01.png"
        },
        {
            name: "client2",
            image: "/img/h4-clients-img-03.png"
        },
        {
            name: "client3",
            image: "/img/h4-clients-img-05.png"
        },
        {
            name: "client3",
            image: "/img/h4-clients-img-07.png"
        },
        {
            name: "client4",
            image: "/img/h4-clients-img-09.png"
        }
    ]



});