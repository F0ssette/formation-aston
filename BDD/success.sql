-- Pour afficher les clients et leurs adresses, seulement la principale
SELECT c.customer_id, c.firstname, c.lastname, a.title, a.street, a.city, a.country, a.zipcode, a.is_main
FROM customer AS c
JOIN address as a ON c.customer_id = a.customer_id
WHERE a.is_main=1;

-- Pour afficher seulement les catégories vides
SELECT 
    c.`name`,
    c.category_id AS Catégorie,
    phc.product_id AS Produit
FROM
    category AS c
        LEFT JOIN
    product_has_category AS phc ON c.category_id = phc.category_id
WHERE
    phc.product_id IS NULL
ORDER BY c.`name`;

-- Pour afficher seulement les catégories qui ne sont pas vides
SELECT 
    c.`name`,
    GROUP_CONCAT(c.category_id) AS Catégorie,
    phc.product_id AS Produit
FROM
    category AS c
        LEFT JOIN
    product_has_category AS phc ON c.category_id = phc.category_id
WHERE
    phc.product_id IS NOT NULL
GROUP BY c.`name`
ORDER BY c.`name`;

-- Rangement du tableau en fonction des catégories
SELECT 
    c.category_id,
    c.`name`,
    GROUP_CONCAT(cat.`name`) AS categorie
FROM
    category AS c
        JOIN
    category AS cat ON cat.category_parent_id = c.category_id
GROUP BY c.category_id;

-- Afficher les commandes avec le total HT et le nb de produits de la commande (bonus à la fin pour afficher seulement les résultats au-dessus de 300)
SELECT 
	c.firstname,
    c.lastname,
    SUM(ohp.price*ohp.quantity) AS prix_HT,
    ROUND(SUM(ohp.price*ohp.quantity*1.2),2) AS prix_TTC,
    COUNT(o.order_id) AS nb_produit
FROM
    order_has_product AS ohp
    JOIN `order` AS o ON o.order_id = ohp.order_id
    JOIN customer AS c ON c.customer_id = o.customer_id
GROUP BY c.firstname;
-- HAVING prix_HT > 300;
