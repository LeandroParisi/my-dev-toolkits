SELECT rating, AVG(length) AS Durações_médias
FROM sakila.film
GROUP BY rating
HAVING Durações_médias BETWEEN 115.0 AND 121.50;

SELECT rating, SUM(replacement_cost) AS Total_replacement_cost
FROM sakila.film
GROUP by rating
HAVING Total_replacement_cost > 3950.50
ORDER BY Total_replacement_cost ASC;