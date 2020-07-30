-- Query the NAME
-- field for all American cities in the CITY table
-- with populations larger than 120000. The CountryCode for America is USA.

-- The CITY table is described as
-- follows:
-- from: https://www.hackerrank.com/challenges/revising-the-select-query-2/problem?h_r=next-challenge&h_v=zen

SELECT NAME
FROM CITY
WHERE population>120000 AND CountryCode='USA';