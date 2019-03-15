CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

create table users (
  user_id serial primary,
  username varchar(40),
  password varchar(40)
)

create table cart (
  cart_id serial primary key,
  product_id integer,
  quantity integer,
  user_id integer,
  
)

create table product_images (
   id serial primary key,
   product_id integer,
   main_img text,
   img_1 text,
   img_2 text,
   img_3 text
)

create table products (
  id serial primary key,
  product_id integer,
  price integer,
  title text,
  description text,
  category text
)

-- // Products
-- // Hats

insert into products (product_id, price, title, description, category)
values (1, 32, 'Whale Dot Performance Trucker Hat','Stetch out those last days of summer! Pack you days full and dont miss a beat in our performance-featured mens hat','hats')

insert into products (product_id, price, title, description, category)
values (2, 30, 'Leather Whale Fill Logo Patch Twill Baseball Hat','Classic cool! Your favorite patchwork pattern just got an update - wear this baseball cap everywhere, whether it is with your favorite Shep Shirt or cruising out on the water!','hats')

insert into products (product_id, price, title, description, category)
values (3, 30, 'Golf Patch Performance Baseball Hat','On par! Our Patch Performance Baseball hat will get you on the fairway in style.','hats')

insert into products (product_id, price, title, description, category)
values (4, 32, 'Performance Mesh Whale Dot Trucker Hat', 'Feel the breeze! With this performance mesh whale dot trucker, you will stay cool and dry no mattter what you are up to!', 'hats')

insert into products (product_id, price, title, description, category)
values (5, 30, 'Leave It All Behind Patch Low Profile Trucker Hat', 'Chill zone! Forget your worries while wearing this leave it all behind hat. It will not be hard, picture yourself relaxing under palm trees while watching the sunset!', 'hats')

insert into products (product_id, price, title, description, category)
values (6, 30, 'Low Profile Tonal Classic Logo Trucker Hat', 'Top off your look! This cool low profile style is all you need for a day living the Good Life.', 'hats')

insert into products (product_id, price, title, description, category)
values (7, 32, 'Whale Dot Performance Bucket Hat', 'Cross this one off your bucket list! Our performance mens hat is just right for keeping the sun and the elements off your head.', 'hats')

insert into products (product_id, price, title, description, category)
values (8, 28, 'Whale Logo Baseball Hat', 'Classics never go out of style! These baseball hats are the perfect fit for your Good Life!', 'hats')

insert into products (product_id, price, title, description, category)
values (9, 20, 'Whale Logo Baseball Hat (Clearance)', 'This hat needs no introduction. One of our best-loved products, our classic mens baseball hat is your go-to hat for wherever you go.', 'hats')


-- // Shirts

insert into products (product_id, price, title, description, category)
values (10, 100, 'Arawak Gingham Clasic Tucker Shirt', 'Clear style! You will love the easy feel and just-right stretch we built into this super comfortable classic-fit button down.', 'shirts')

insert into products (product_id, price, title, description, category)
values (11, 100, 'End On End Stretch Classic Murray Shirt', 'Endless style! With its classic end-on-end weave, this mens classic-fit sport shirt has a visual appeal that goes on forever.', 'shirts')

insert into products (product_id, price, title, description, category)
values (12, 100, 'Tobago Tattersall Classic Tucker Shirt', 'Skip the commute! Named after the tiny island of Tobago this button-down is so comfortable it can transport you to a warm sandy beach, even if that guy on the commuter train is talking too loudly on his phone.', 'shirts')

insert into products (product_id, price, title, description, category)
values (13, 80, 'Gibbs Hill Classic Tucker Shirt', 'Picture perfect! The Gibbs Hill Lighthouse in Bermuda is always a crowd favorite, and this plaid is no acception—with added stretch it is great for vacation fun!', 'shirts')

insert into products (product_id, price, title, description, category)
values (14, 150, 'Linen Greenwich Shirt', 'Luxury Italian Linen! Made from luxe linen and cotton at a family-owned and operated mill in Italy, this sophisticated style is for those who live life to the fullest.', 'shirts')

insert into products (product_id, price, title, description, category)
values (15, 100, 'Pine Oak Classic Tucker Shirt', 'Stretch twill! You will love the feel and easy way our mens classic-fit sport shirts move with the perfect blend of cotton and stretch.', 'shirts')

-- // images by product_id

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (1, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw309495a6/images/2018/1A5080.276.a.zoom.jpg','https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw309495a6/images/2018/1A5080.276.a.zoom.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw8702b907/images/2018/1A5080_061_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw37728339/images/2018/1A5080.424.a.zoom.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (2, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwe5174a49/images/2019/1F000056_792_OF_F.jpg?sw=1680&sh=2000&sm=cut','https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwe5174a49/images/2019/1F000056_792_OF_F.jpg','https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw4b47defd/images/2019/1F000056_976_LD_F.jpg','https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw40b3e4e1/images/2019/1F000056_628_OF_F.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (3, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw2d65d1f6/images/2018/1F000028_039_LD_F.jpg','https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw2d65d1f6/images/2018/1F000028_039_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw615005ed/images/2018/1F000028_410_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwe462e941/images/2018/1F000028_100_LD_F.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (4, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw33632d4f/images/2019/1F000061_057_LD_F.jpg?sw=1680&sh=2000&sm=cut', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw33632d4f/images/2019/1F000061_057_LD_F.jpg?sw=1680&sh=2000&sm=cut', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwe3e76146/images/2019/1F000061_976_LD_F1.jpg?sw=1680&sh=2000&sm=cut', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw42c207be/images/2019/1F000061_100_LD_F.jpg?sw=1680&sh=2000&sm=cut')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (5, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw3d2e310f/images/2019/1F000052_628_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw3d2e310f/images/2019/1F000052_628_LD_F.jpg','https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw7af979a2/images/2019/1F000052_751_LD_F.jpg','https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw6f319509/images/2019/1F000052_100_LD_F.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (6, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwd215222d/images/2018/1F000021_456_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwd215222d/images/2018/1F000021_456_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw7bb6bb60/images/2018/1F000021_401_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw30aa33f5/images/2018/1F000021_100_LD_F.jpg?sw=1680&sh=2000&sm=cut')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (7, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwaf2d7f40/images/2019/1F000036_061_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwaf2d7f40/images/2019/1F000036_061_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw7d95589b/images/2018/1F000036_410_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw898d77dd/images/2018/1F000036_100_LD_F.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (8, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw088729a0/images/2018/1F000090_034_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw088729a0/images/2018/1F000090_034_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwf1f16527/images/2018/1F000090_340_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw4d7199f8/images/2018/1F000090_628_LD_F.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (9, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw29f6b44d/images/MLB/1A0087.440.a.zoom.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw29f6b44d/images/MLB/1A0087.440.a.zoom.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwa54d6ee2/images/MLB/1A0087.410.a.zoom.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw7f5a3d30/images/2018/1A0087_100_LD_F.jpg?')


-- // Shirts

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (10, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw9cddefe6/images/2018/1W000011_996_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw9cddefe6/images/2018/1W000011_996_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwc4018258/images/2018/1W000011_459_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwc34260c9/images/2018/1W000011_526_LD_F.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (11, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw30529f6c/images/2018/1W3473.484.a.zoom.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw30529f6c/images/2018/1W3473.484.a.zoom.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw9977fa5e/images/2018/1W3473_456_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwcfbef593/images/2018/1W3473_100_LD_F.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (12, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw666815cb/images/2018/1W000020_526_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw666815cb/images/2018/1W000020_526_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwfe62262c/images/2018/1W000020_658_LD_F.jpg?sw=1680&sh=2000&sm=cut', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw6109d386/images/2018/1W000020_459_LD_F.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (13, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw98e829ae/images/2018/1W000058_317_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw98e829ae/images/2018/1W000058_317_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw73ba9d8d/images/2018/1W000058_456_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwc2aac4d5/images/2018/1W000058_459_LD_F.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (14, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwffd192d4/images/2019/1W000219_983_LD_F.jpg?', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwffd192d4/images/2019/1W000219_983_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw124f75af/images/2019/1W000219_250_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwd4759604/images/2019/1W000219_964_LD_F.jpg')

insert into product_images (product_id, main_img, img_1, img_2, img_3)
values (15, 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwda072baf/images/2018/1W3820_013_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dwda072baf/images/2018/1W3820_013_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw902db78c/images/2018/1W3820_786_LD_F.jpg', 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw89801e5d/images/2018/1W3820_324_LD_F.jpg')