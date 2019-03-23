delete from cart
where user_id = $1 and product_id = $2;

select * from cart as c
join products as p on c.product_id = p.product_id
join product_images as pi on pi.product_id = p.product_id
where user_id = $1