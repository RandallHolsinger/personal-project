select * from products
join product_images
on products.product_id = product_images.product_id
where products.category = $1