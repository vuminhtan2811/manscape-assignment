## Endpoints

There are 1 endpoints available:

1. Get orders: /orders

**Response**

```json
{
  "orders": [
    {
      "id": "US5426899",
      "items": [
        {
          "id": "US5426899",
          "name": "Ultricies Nibh",
          "quantity": 2,
          "price": 17.98,
          "imageUrl": "https://media.istockphoto.com/photos/tennis-ball-picture-id137345149?k=20&m=137345149&s=612x612&w=0&h=9BBPqq4_dFkW9V9qTounVg60u5YipnqhOg-ZjapcINg=",
          "createdAt": 1644806494995,
          "lastModifiedAt": 1644806494995
        },
        {
          "id": "US5426899",
          "name": "Fringilla Sollicitudin Consectetur",
          "quantity": 2,
          "price": 17.98,
          "imageUrl": "https://www.best4sportsballs.com/pub/media/content/management/Logo1.png",
          "createdAt": 1644806494995,
          "lastModifiedAt": 1644806494995
        }
      ],
      "createdAt": 1644694100595,
      "lastModifiedAt": 1644694100595,
      "shipAddress": "Ryan Fralick 1489 DESERT SPRINGS AVE RICHLAND, Washington 99352 United States",
      "user": {
        "id": "userId_1",
        "name": "Scott Vu",
        "phone": "84913059285",
        "balance": 1000
      },
      "status": ["SUBSCRIPTION_ORDER", "PAID", "UNFULFULLED"]
    }
  ]
}
```

## How to run

This is a standard create-react-app. I used concurrently to run 2 scripts in parallel. You can start it with:

**yarn**

```
yarn start
```

**npm**

```
npm start
```
