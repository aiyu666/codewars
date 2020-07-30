-- Japanese Cities's Attributes

-- Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.

-- The CITY table is described as follows:
-- from: https://www.hackerrank.com/challenges/japanese-cities-attributes/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

SELECT *
FROM CITY
WHERE COUNTRYCODE='JPN';