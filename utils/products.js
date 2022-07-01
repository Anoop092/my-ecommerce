 import bcrypt from 'bcryptjs'
 export const data = 
    {
        users:
        [
            {
            name:'Anoop',
            email:'anoop@gmail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true,
        },
        {
            name:'user',
            email:'user@gmail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:false,
        }
        ],
        products:[{
            name:'Free shirt',
            slug:'free-shirt',
            category:'Shirts',
            image:'/images/shirt1.jpg',
            price:70,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            countInStock:20,
            description:'Popular Shirt'


        },
        {
            name:'Fit shirt',
            slug:'fit-shirt',
            category:'Shirts',
            image:'/images/shirt2.jpg',
            price:80,
            brand:'Adidas',
            rating:4.6,
            numReviews:10,
            countInStock:20,
            description:'Popular Shirt'


        },
        {
            name:'Slim shirt',
            slug:'slim-shirt',
            category:'Shirts',
            image:'/images/shirt3.jpg',
            price:90,
            brand:'Raymond',
            rating:4.5,
            numReviews:10,
            countInStock:20,
            description:'Popular Shirt'


        },
        {
            name:'Golf Pants',
            slug:'golf-pant',
            category:'pants',
            image:'/images/pants1.jpg',
            price:90,
            brand:'Oliver',
            rating:4.5,
            numReviews:10,
            countInStock:20,
            description:'Smart Looking Pant'


        },
        {
            name:'Fit pants',
             slug:'fit-pant',
            category:'pants',
            image:'/images/pants2.jpg',
            price:70,
            brand:'Zara',
            rating:4.5,
            numReviews:10,
            countInStock:20,
            description:'A popular pants'


        },
        {
            name:'Classic pants',
             slug:'classic-pant',
            category:'pants',
            image:'/images/pants3.jpg',
            price:95,
            brand:'casely',
            rating:4.5,
            numReviews:10,
            countInStock:20,
            description:'Popular Pant'


        },
    ]
    }
 