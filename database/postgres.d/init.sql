SELECT 'CREATE DATABASE server_template'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'server_template')\gexec