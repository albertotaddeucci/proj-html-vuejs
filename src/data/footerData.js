import { reactive } from 'vue'


export const footerData = reactive({


    importantLinks: [
        {
            labelName: "About me",
            url: "#"

        },
        {
            labelName: "About us",
            url: "#"

        },
        {
            labelName: "Language pack",
            url: "#"

        },
        {
            labelName: "Become a coach",
            url: "#"

        },
        {
            labelName: "Monthly events",
            url: "#"

        },
    ],

    contactList: [
        {
            labelName: "site",
            contact: "457 BigBlue Street, NY 10013",
            icon: "fa-solid fa-location-dot"

        },
        {
            labelName: "Phone",
            contact: "(315) 5512-2579",
            icon: " fa-solid fa-phone"

        },
        {
            labelName: "mail",
            contact: "everlead@mikado.com",
            icon: "fa-regular fa-envelope"

        }
    ],

    twComments: [
        {
            user: "@aliasadam",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit."


        },
        {
            user: "@aliasadam",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit."


        }


    ]





});