select * from cart as c
join products as p on c.product_id = p.product_id
join product_images as pi on pi.product_id = p.product_id
where user_id = $1