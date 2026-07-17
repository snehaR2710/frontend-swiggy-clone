
function CartItem({ item }) {
    return (
        <div>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
        </div>
    )
}

export default CartItem