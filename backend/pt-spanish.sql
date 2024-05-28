\echo 'Delete and recreate pt-spanish db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE pt-spanish;
CREATE DATABASE pt-spanish;
\connect pt-spanish

\i pts-schema.sql
\i pts-seed.sql

\echo 'Delete and recreate pt-spanish_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE pt-spanish_test;
CREATE DATABASE pt-spanish_test;
\connect pt-spanish_test

\i pts-schema.sql