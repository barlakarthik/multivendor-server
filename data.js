import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: "Karthik",
            email: "karthikyadav1727@gmail.com",
            password: bcrypt.hashSync('karthik'),
            address: 'india, andhra, sklm, santabommali, borubadhra, godalam',
            phone: 7989400868,
            image: "./assets/images/sellers/ja.png",
            isAdmin: true
        },
        {
            name: "sriram",
            email: "sriram2772@gmail.com",
            password: bcrypt.hashSync('sriram'),
            address: 'india, andhra, sklm, ampole, munasabpeta',
            phone: 7845612306,
            image: "./assets/images/sellers/ja.png",
            isAdmin: false
        },
        {
            name: "venkatesh",
            email: "venkybalaga889@gmail.com",
            password: bcrypt.hashSync('venkatesh'),
            address: 'india, andhra, sklm, thilaru, budithi',
            phone: 9874561230,
            image: "./assets/images/sellers/ja.png",
            isAdmin: true
        },
        {
            name: "lokesh",
            email: "lokeshbora67@gmail.com",
            password: bcrypt.hashSync('lokesh'),
            address: 'india, andhra, sklm, etcherla, ragole',
            phone: 9969480868,
            image: "./assets/images/sellers/ja.png",
            isAdmin: false
        }
    ],
    cateories: [
        {
            name: "Fruit"
        },
        {
            name: "Vegetable"
        }
    ],
    products: [
        {
            name: "Broccoli",
            slug: "broccoli",
            category: "Vegetable",
            description: "global production of broccoli (combined for production reports with cauliflowers) was 27 million tonnes, with China and India together accounting for 73% of the world tota A 100-gram reference serving of raw broccoli provides 34 calories and is a rich source (20% or higher of the Daily Value, DV) of vitamin C (107% DV) and vitamin K (97% DV) (table). Raw broccoli also contains moderate amounts (10–19% DV) of several B vitamins and the dietary mineral manganese, whereas other micronutrients are low in content (less than 10% DV). Raw broccoli is 89% water, 7% carbohydrates, 3% protein, and contains negligible fat (table).",
            price: "0.95",
            image: "./assets/images/products/broccoli.png",
            seller: "Karthik"
        },
        {
            name: "Watermelon",
            slug: "watermelon",
            category: "Fruits",
            description: "Watermelon is a sweet and refreshing low calorie summer snack. It provides hydration and also essential nutrients, including vitamins, minerals, and antioxidants",
            price: "1.25",
            image: "./assets/images/products/watermelon.jpg",
            seller: "Rajesh"
        }
    ]
}
export default data;