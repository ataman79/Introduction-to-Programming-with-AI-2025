enum OrderStatus {
Pending = "Pending...",
Processing = "Processing",
Shipped = "Shipped",
Delivered = "Delivered",
Cancelled = "Cancelled"
}
let OrderStatusstatus: OrderStatus = OrderStatus.Pending;
console.log(`Current order status: ${OrderStatusstatus}`);