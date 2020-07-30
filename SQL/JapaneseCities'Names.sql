-- Japanese Cities
-- ' Names
-- Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.
-- The CITY table is described as follows:
-- from: https://www.hackerrank.com/challenges/japanese-cities-name/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

SELECT NAME
FROM CITY
WHERE COUNTRYCODE='JPN';