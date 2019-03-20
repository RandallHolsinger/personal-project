insert into cart (
    product_id,
    quantity,
    user_id
)
values ($1, 1, $2);

select * from cart
where user_id = $1