SET @orderID=1;
SET @productID=20;
SET @qty=4;

INSERT INTO order_has_product (order_id, product_id, price, quantity)
SELECT @orderID, @productID, p.price, @qty
FROM product AS p
WHERE p.product_id=@productID AND p.quantity_stock > @qty;