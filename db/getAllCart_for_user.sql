select * from cart as c
where user_id = $1
join products as p on c.product_id = p.product_id
join products_images as pi on pi.product_id = p.product_id