
/**
 * calculate the total quantity of all products ordered by the customer?
 */


let customer = {
    name: "John Doe",
    orders: [
        { id: 1, product: "Widget", quantity: 2 },
        { id: 2, product: "Gadget", quantity: 1 },
        { id: 3, product: "Widget", quantity: 3 }
    ]
};

let orderSum = 0;

customer.orders.map((item)=>{
    orderSum = item.quantity+orderSum;
})

console.log(orderSum)