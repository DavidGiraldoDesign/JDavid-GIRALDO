const projectHictio = {
    style: {
        background: 'rgb(250,250,250)',
        color: ''
    },
    coverData: {
        title: 'Hictio',
        subTitle: 'Interactive museography',
        purpose: 'Enhance autonomy, satisfaction and information recall of visual impaired people who visit an aquarium located in the Zoo of Cali, Colombia.',
        youTubeVideoID: 'jIMBqsfZtBE',
        imageCover: 'http://lorempixel.com/output/cats-q-g-1920-1080-10.jpg'
    },
    briefData: {
        longTitle: 'Interactive Products for Enhancing Accessibility of the Visually Impaired in Touristic Environments',
        team: 'Jose David Giraldo | Camilo Montoya',
        scope: 'Graduate thesis',
        date: '2018',
        researchTools: 'Personas / Customer journey map / Conducted interview / Fly in the wall / Draw it / Design principle / Universal design / User centered design / User engagement',
        techTools: 'Adobe Photoshop / Adobe illustrator / Figma / SolidWorks / V-Ray / Cinema 4D / Rhino / Java / TCD-IP / Raspberry Pi / Arduino / 3D Prototyping / 3D printing'
    },
    sections: [{
            title: '',
            subTitle: '',
            text: ``,
            media: true,
            url: 'https://picsum.photos/1400/900/?random',
            style: {
                background: 'rgb(255,255,255)',
                color: ''
            }
        },
        {
            title: '',
            subTitle: '',
            text: `Hictio is a product-service system that offers an accessible interactive museography experience for the aquarium of the “Zoológico de Cali” in Colombia. It allows users, whether blind or not, to interact with the expositions through their smarts phones and with the integrated furniture over the place. `,
            style: {
                background: 'linear-gradient(to top, rgba(255,230,230, 1), rgba(255,255,255, 1))',
                color: ''
            }
        },
        {
            title: '',
            subTitle: '',
            text: ``,
            media: true,
            url: 'http://www.wookey.net/wp-content/uploads/2014/01/JansportCienegaArtFront-copy-427x600.png',
            style: {
                background: 'rgb(255,230,230)',
                color: ''
            }
        },
        {
            title: 'Problem context',
            subTitle: 'User centered design approach',
            text: `We decided to intervene the “Zoologíco de Cali” because it is one of the most representative touristic places in the city, and it has a remarkable lack of accessibility for blind and partially sighted people.
            \n The place with more accessibility issues is the aquarium, considering that:
            \n 1. The majority of the exposition offer visual stimuli only to learn about the animals
            \n 2. It not offer a well accessible signalization, that makes impossible for a blind person to pass-through without needing any guidance.
            `,
            style: {
                background: 'rgb(255,230,230)',
                color: ''
            }

        },
        {
            title: '',
            subTitle: '',
            text: ``,
            media: true,
            url: null,
            youTubeVideoID:'g6idU-GWSxA',
            style: {
                background: 'rgb(255,230,230)',
                color: ''
            }
        },
        {
            title: '',
            subTitle: 'Field work',
            text: `We visited the zoo with tow blind people as subject of the study. We ask them to think out loud during the interaction with the expositions. Furthermore, we pass-through and interact with the butterflies’ and birds’ expositions with our eyes cover to understand more closely their situation. `,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: 'Discoveries',
            subTitle: '',
            text: `1.	 They rely on screens readers such as VoiceOver or TalkBack to give them digital context inside the architecture information of the app. That is why they enjoy and recall the expositions that have sounds or narrated videos, because they bring physical context to them.
            \n 2. They see with their hands, and always seek for haptic stimuli to create a cognitive image. That is why expositions where they found statues or textures to touch were often feature as interesting and remarkable
            \n 3. They have high technology literacy to use smartphones and mobile apps like Facebook, Instagram, and WhatsApp likewise. This ability allows them to overcome the absence of sight and use these social platforms to share their touristic experience with others. 
            `,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: 'The Design',
            subTitle: '',
            text: `With the aim of enhance the touristic experience and information recall of blind people, we developed Hictio, a smart combination of physical and digital product-service system. Integrate with an interactive furniture with physical figure of fish, easy to put slap-wristband with RFDI tags that triggers the interactions, Bluetooth low energy modules to map and localize the exposition and the furniture as well, and an accessible mobile app that guides the experience.`,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: 'User experience story telling',
            subTitle: '',
            text: ``,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: '',
            subTitle: 'User experience and usability testing ',
            text: `From several user test with blind people, we found that smart phones could be used to give both digital and physical context to the user about the interaction flow.
            \n Physical models of fish were created to understand the tactile recognition process blind people do to create cognitive image. Therefore we establish hot spots where to put capacitive sensors to trigger different stimuli and interactions.
            \n We also conducted ergonomic evaluations with low fidelity prototypes to set heights and reach zones. 
            \n At last but not least, we test different types of NFC holders, and after tested with the blind users we decided to implement slap-wristbands due to it easy way to put it one and flexible size. 
            `,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: 'Industrial design technical details',
            subTitle: '1.	Furniture',
            text: ``,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: '',
            subTitle: '2.	Slap wristband',
            text: `We decided to add a NFC tag inside a custom slap-wristband that holds a UID (unique identification) to bind it with each user´s smartphone mobile app. That creates a private TCP-IP communication between the phone and the interactive furniture.`,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: '',
            subTitle: '3.	Bluetooth Low Energy module',
            text: ``,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: 'User interface and interaction flow',
            subTitle: '',
            text: `1.	Hictio is a button-less app, with gesture-based navigation. Allowing the user to interact with swipe gesture and touch control; once for listen the narrator and twice to confirm an action or trigger an interaction.`,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: '',
            subTitle: '',
            text: `2.	When BLE modules are detected, the app shows and tell the user where is he located, and triggers an interaction to add the specific fish located in that area. Like the PokemonGo App just with BLE instead of GPS.`,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: '',
            subTitle: '',
            text: `3.	The interactive furniture it is located in the middle of the aquarium, it holds a TCP-IP Server with LAN connection, hosted in a Raspberry PI B+. The visitors could send messages to the server in order to find the furniture through sound, triggered inside the furniture by the messages.`,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: '',
            subTitle: '',
            text: `4.	One the user is in front of the furniture, the visitor locates the NFC wristband near the reader. Now the server knows exactly to which smartphone is connected with, in order to send instructions that triggers the interaction on the mobile app.`,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: '',
            subTitle: '',
            text: `5.	Each fish figure has capacitive sensors under its rubber skin that detect whether the fish has been touched or not. Different areas of the fish’s body triggers different stories in the app. `,
            style: {
                background: '',
                color: ''
            }
        },
        {
            title: 'More photos for the curious: ',
            subTitle: '',
            text: ``,
            style: {
                background: '',
                color: ''
            }
        }
    ]
}
