import { Event } from "../types";

export const events: Event[] = [
    {
        id: "seneca-college",
        title: "Seneca College",
        type: "education",
        date: "Sep 2018",
        imageSrc: "https://images.dailyhive.com/20200313074400/shutterstock_1450069133.jpg",
        defaultEnabled: true
    },
    {
        id: "nsbehacks",
        title: "NSBEHacks 2018",
        type: "activity",
        date: "Nov 2018",
        imageSrc: "http://localhost:3000/images/nsbehacks.png",
        defaultEnabled: true
    },
    {
        id: "hack-the-valley",
        title: "Hack the Valley III & IV",
        type: "activity",
        date: "Feb 2019 and Feb 2020",
        imageSrc: "https://i.imgur.com/GTjwKfz.jpg",
        defaultEnabled: true
    },
    {
        id: "privanote",
        title: "PrivaNote",
        type: "project",
        date: "Apr 2021 - Dec 2021",
        imageSrc: "https://camo.githubusercontent.com/100ab20dc9470f417c33ad2586a27021ce9cb09487a31a3037f08eb50664ed04/68747470733a2f2f692e696d6775722e636f6d2f4a4144784c47312e706e67",
        defaultEnabled: true,
    },
    {
        id: "graduation",
        title: "Graduation",
        type: "education",
        date: "Dec 2021",
        imageSrc: "https://www.senecacollege.ca/convocation/2019/spring-ceremony-5/images/Convocation-2019-06-23-A-005.jpg", 
        defaultEnabled: true
    },
    {
        id: "eclipse-foundation",
        title: "Eclipse Foundation",
        type: "career",
        date: "Jul 2022 - Current",
        imageSrc: "https://www.tabnine.com/blog/wp-content/uploads/2021/11/blog_image_19-1.png",
        defaultEnabled: true
    }
]