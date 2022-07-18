SELECT active, COUNT(active) FROM sakila.customer GROUP BY active;

SELECT store_id, if(active, 'Ativo', 'Inativo') AS status,
COUNT(active)
FROM sakila.customer GROUP BY store_id, active
ORDER BY store_id, status;

SELECT rating, AVG(length) FROM sakila.film
GROUP BY rating
ORDER BY AVG(length);

SELECT district, count(district) FROM sakila.address
GROUP BY district
ORDER BY count(district) DESC;
