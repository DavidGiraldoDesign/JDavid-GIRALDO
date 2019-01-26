const projectBase = {
    coverData: {
        title: 'Title',
        subTitle: 'SubTitle',
        youTubeVideoID: 'rbmRyxe87PA'
    },
    briefData: {
        longTitle: 'LongTitle',
        team: 'Team',
        scope: 'Scope',
        date: 'Date',
        researchTools: 'researchTools',
        techTools: 'techTools'
    },
    sections: [{
            title: 'Title section',
            subTitle: 'SubTitle section',
            text: 'Text setion'
        },
        {
            title: 'Title section',
            subTitle: 'SubTitle section',
            text: 'Text setion'
        },
        {
            title: 'Title section',
            subTitle: 'SubTitle section',
            text: 'Text setion'
        }
    ]
}
let t = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat mi sed nibh tempus tempor. In hac habitasse platea dictumst. Integer tempor fermentum orci, id scelerisque elit venenatis non. Donec congue lacinia lacinia. Mauris enim quam, vehicula in tempor a, cursus in tortor. Fusce cursus, nisl at molestie interdum, odio turpis interdum diam, ut egestas risus ligula feugiat dolor. Maecenas scelerisque, erat ac molestie ullamcorper, justo lorem porttitor magna, in accumsan eros justo vel urna.';
//========================================
const projectHictio = {
    coverData: {
        title: 'Hictio',
        subTitle: 'Interactive museography',
        purpose:'Enhance autonomy, satisfaction and information recall of visual impaired people who visit an aquarium located in the Zoo of Cali, Colombia.',
        youTubeVideoID: 'jIMBqsfZtBE',
        imageCover:'http://lorempixel.com/output/cats-q-g-1920-1080-10.jpg'
    },
    briefData: {
        longTitle: 'Interactive Products and Universal Design for Enhancing Accessibility of the Visually Impaired in Touristic Environments',
        team: 'Jose David Giraldo | Camilo Montoya',
        scope: 'Graduate thesis',
        date: '2018',
        researchTools: 'Personas / Customer journey map / Conducted interview / Fly in the wall / Draw it / Design principle / Universal design / User centered design / User engagement',
        techTools: 'Adobe Photoshop / Adobe illustrator / Figma / SolidWorks / V-Ray / Cinema 4D / Rhino / Java / TCD-IP / Raspberry Pi / Arduino / 3D Prototyping / 3D printing'
    },
    sections: [{
            title: '',
            subTitle: '',
            text: `Hictio is a product-service system that offers an accessible interactive museography experience for the aquarium of the “Zoológico de Cali” in Colombia. It allows users, whether blind or not, to interact with the expositions through their smarts phones and with the integrated furniture over the place. `
        },
        {
            title: 'Problem context',
            subTitle: 'User centered design approach',
            text: `We decided to intervene the “Zoologíco de Cali” because it is one of the most representative touristic places in the city, and it has a remarkable lack of accessibility for blind and partially sighted people.
            \n The place with more accessibility issues is the aquarium, considering that:
            \n 1. The majority of the exposition offer visual stimuli only to learn about the animals
            \n 2. It not offer a well accessible signalization, that makes impossible for a blind person to pass-through without needing any guidance.
            `
        },
        {
            title: '',
            subTitle: 'Field work',
            text: `We visited the zoo with tow blind people as subject of the study. We ask them to think out loud during the interaction with the expositions. Furthermore, we pass-through and interact with the butterflies’ and birds’ expositions with our eyes cover to understand more closely their situation. `
        },
        {
            title: 'Discoveries',
            subTitle: '',
            text: `1.	 They rely on screens readers such as VoiceOver or TalkBack to give them digital context inside the architecture information of the app. That is why they enjoy and recall the expositions that have sounds or narrated videos, because they bring physical context to them.
            \n 2. They see with their hands, and always seek for haptic stimuli to create a cognitive image. That is why expositions where they found statues or textures to touch were often feature as interesting and remarkable
            \n 3. They have high technology literacy to use smartphones and mobile apps like Facebook, Instagram, and WhatsApp likewise. This ability allows them to overcome the absence of sight and use these social platforms to share their touristic experience with others. 
            `
        },
        {
            title: 'The Design',
            subTitle: '',
            text: `With the aim of enhance the touristic experience and information recall of blind people, we developed Hictio, a smart combination of physical and digital product-service system. Integrate with an interactive furniture with physical figure of fish, easy to put slap-wristband with RFDI tags that triggers the interactions, Bluetooth low energy modules to map and localize the exposition and the furniture as well, and an accessible mobile app that guides the experience.`
        },
        {
            title: 'User experience story telling',
            subTitle: '',
            text: ``
        },
        {
            title: '',
            subTitle: 'User experience and usability testing ',
            text: `From several user test with blind people, we found that smart phones could be used to give both digital and physical context to the user about the interaction flow.
            \n Physical models of fish were created to understand the tactile recognition process blind people do to create cognitive image. Therefore we establish hot spots where to put capacitive sensors to trigger different stimuli and interactions.
            \n We also conducted ergonomic evaluations with low fidelity prototypes to set heights and reach zones. 
            \n At last but not least, we test different types of NFC holders, and after tested with the blind users we decided to implement slap-wristbands due to it easy way to put it one and flexible size. 
            `
        },
        {
            title: 'Industrial design technical details',
            subTitle: '1.	Furniture',
            text: ``
        },
        {
            title: '',
            subTitle: '2.	Slap wristband',
            text: `We decided to add a NFC tag inside a custom slap-wristband that holds a UID (unique identification) to bind it with each user´s smartphone mobile app. That creates a private TCP-IP communication between the phone and the interactive furniture.`
        },
        {
            title: '',
            subTitle: '3.	Bluetooth Low Energy module',
            text: ``
        },
        {
            title: 'User interface and interaction flow',
            subTitle: '',
            text: `1.	Hictio is a button-less app, with gesture-based navigation. Allowing the user to interact with swipe gesture and touch control; once for listen the narrator and twice to confirm an action or trigger an interaction.`
        },
        {
            title: '',
            subTitle: '',
            text: `2.	When BLE modules are detected, the app shows and tell the user where is he located, and triggers an interaction to add the specific fish located in that area. Like the PokemonGo App just with BLE instead of GPS.`
        },
        {
            title: '',
            subTitle: '',
            text: `3.	The interactive furniture it is located in the middle of the aquarium, it holds a TCP-IP Server with LAN connection, hosted in a Raspberry PI B+. The visitors could send messages to the server in order to find the furniture through sound, triggered inside the furniture by the messages.`
        },
        {
            title: '',
            subTitle: '',
            text: `4.	One the user is in front of the furniture, the visitor locates the NFC wristband near the reader. Now the server knows exactly to which smartphone is connected with, in order to send instructions that triggers the interaction on the mobile app.`
        },
        {
            title: '',
            subTitle: '',
            text: `5.	Each fish figure has capacitive sensors under its rubber skin that detect whether the fish has been touched or not. Different areas of the fish’s body triggers different stories in the app. `
        },
        {
            title: 'More photos for the curious: ',
            subTitle: '',
            text: ``
        }
    ]
}
const projectGinef = {
    coverData: {
        title: 'Ginef ',
        subTitle: 'Recommender system App for birth control methods',
        purpose:'',
        youTubeVideoID: null,
        imageCover:'http://lorempixel.com/output/cats-q-g-1920-1080-10.jpg'
    },
    briefData: {
        longTitle: 'Human Computer Interaction for Improving Reliability of Birth Control Method Recommender Systems for young Women.',
        team: 'Jose David Giraldo | Maria Camila Morales',
        scope: 'Academic',
        date: '2017',
        researchTools: 'Personas / Design principle / Usability test / Conducted interview / Information architecture / Recommender algorithms / User centered design / HCI',
        techTools: 'Adobe Photoshop / Adobe illustrator / Javascript / HTML / CSS / Node.js / MongoDB'
    },
    sections: [{
            title: '',
            subTitle: '',
            text: 'Ginef is a mobile/web application that offers a recommendation service of birth control methods. It is tailored for young women having or begging their sexual relations, and have doubts about witch method is more accurate for their life style and preferences. Furthermore, it allows to have the opinion of the boyfriend in order to help make the decision as a couple. Its recommendation is not a medical prescription, thought, it is a guide to help women and gynecologists during their medical appointments'
        },
        {
            title: 'Problem context',
            subTitle: '',
            text: `In Colombia, 20% of the population between 15 and 24 years old, who use birth control methods, are unsatisfying with their choices. 
            \n The different features of each method offered in Colombia makes it difficult to choose between methods, thus the decision making experience becomes confusing.
            \n During a medical appointment, the gynecologist only takes in consideration the woman´s biological factors in order to make a medical prescription. Disregarding the factor related with her life style.`
        },
        {
            title: '',
            subTitle: 'Field work',
            text: 'The field work allows us to understand which factors take place into the decision making process about birth control methods. 48 women, between 15 and 24 years old, with an active sexual life, were interviewed.'
        },
        {
            title: 'Discoveries:',
            subTitle: 'What we found',
            text: `
            70%  of the subjects use birth control methods whether they have a couple or not. Furthermore, there is a concern about having the boyfriend´s option into the decision as a couple. At last, the variables more relevant, involved into the decision making process are:
            \n 	Injection / Swollwed / Required medical assistance / Insertion into the vagina / Required periodic medical check up / The method could be ceased in any moment / Daily use
`
        },
        {
            title: 'The design:',
            subTitle: '',
            text: `Accordingly with the identified variables and discoveries, we design a birth control method recommender service that brings a reliable and satisficing decision making experience for young women during their first approach toward sexual life. 
`
        },
        {
            title: '',
            subTitle: 'User experience and usability evaluations',
            text: `We designed a first functional prototype deployed in a web platform, then we conducted a task analysis to test the usability of the interface, and the precision of the recommender algorithm as well.
            \n The result lead us toward a mobile application approach, reducing the amount of information displayed in the interface, and narrow it down to one question at a time.
            
`
        },
        {
            title: 'Interaction flow',
            subTitle: '',
            text: ``
        },
        {
            title: '',
            subTitle: '1)	Login and registration ',
            text: `The user fills up the form and adds a poto. Afterward, the app clarifies that its result are not a medical prescription, nevertheless it can be used as a guide.    `
        },
        {
            title: '',
            subTitle: '2)	Gathering information',
            text: `Through a direct method of gathering information, the user answers a sort of questions regarding the variables involved into the decision making process. Each question is answered with “agree” (1) , “disagree” (-1) or “indifferent” (0).`
        },
        {
            title: '',
            subTitle: '3)	Results and editing',
            text: `Ginef disclose the results base on the user’s answers. It organizes the methods within a scale that goes from the more convenient to the less of them. Each of these answers can be edited.`
        },
        {
            title: '',
            subTitle: '4)	Boyfriend´s opinión',
            text: `If the woman has a boyfriend, she can add a second profile, where he can answers the same questions to be taken in consideration. `
        },
        {
            title: '',
            subTitle: '5)	Medical report',
            text: `The result acts as a guide to pursue a more accurate medical perception to the patient´s life style.`
        }
    ]
}
const projectBeo = {
    coverData: {
        title: 'BeoPlay S1 A2',
        subTitle: 'Music meets food for Bang & Olufsen',
        purpose:'',
        youTubeVideoID: 'jIMBqsfZtBE',
        imageCover:'http://lorempixel.com/output/cats-q-g-1920-1080-10.jpg'
    },
    briefData: {
        longTitle: 'Brand Innovation for Consumer Electronics to Enhance Social Gathering Experiences around Music, Food, and Illumination.',
        team: 'Jose David Giraldo | Natalia Valencia',
        scope: 'Academic',
        date: '2015',
        researchTools: 'Personas / Design principle / SCAMPER',
        techTools: 'Abode Photoshop, Illustrator / SolidWorks / V-Ray / Rhino / Arduino / Processing for Java'
    },
    sections: [{
            title: '',
            subTitle: '',
            text: 'The BeoPlay S1 A2 is the conceptual result of merge music, food, and illumination as factors presented in human relationships, to create a product ecosystem for social gatherings.'
        },
        {
            title: '',
            subTitle: '',
            text: 'Taking Bang&Olusen´s brand DNA as inspiration to pursue beauty and functionality as well, we proposed an elegant furniture sound system…'
        },
        {
            title: 'Title section',
            subTitle: 'SubTitle section',
            text: 'Text setion'
        }
    ]
}
const projectShell = {
    coverData: {
        title: 'Helix-Ultra',
        subTitle: 'Ergonomic Evaluation and Brand Communication for Packaging Design',
        purpose:'',
        youTubeVideoID: null,
        imageCover:'http://lorempixel.com/output/cats-q-g-1920-1080-10.jpg'
    },
    briefData: {
        longTitle: 'Redesigning the Shell’s Helix-Ultra motor oil bottle through ergonomic evaluation and brand communication for packaging design.',
        team: 'Jose David Giraldo | Luisa Oviedo | Santiago Alonso',
        scope: 'Academic',
        date: '2014',
        researchTools: 'Ergonomic evaluation / Brand analizis / SCAMPER',
        techTools: 'Adobe Photoshop / Adobe illustrator / SolidWorks / V-Ray / Rhino'
    },
    sections: [{
            title: '',
            subTitle: '',
            text: 'This new esthetic is inspired by the speed, beauty, and strength of the Ferrari. Delivering a more robust and dynamic form with ergonomic improvements.'
        },
        {
            title: '',
            subTitle: '',
            text: 'I developed an ergonomic analysis of the bottle´s handle to understand the angles and efforts of the wrist when a person uses the bottle.   '
        },
        {
            title: '',
            subTitle: '',
            text: 'The Shell’s Helix-Ultra motor oil bottle Ferrari edition, delivers a more ergonomic handling with a compelling form and visual design. This new appearance convey a message of strength and dynamism.'
        }
    ]
}
//========================================
const projectHolder = [
    projectHictio,
    projectGinef,
    projectBeo,
    projectShell
]
