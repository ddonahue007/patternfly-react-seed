#!/bin/bash

if [ -z "${API_URL}" ]; then
    API_URL=http://localhost:8080
fi

echo "Calling endooint: ${URL}/api/customer"

curl -H "Content-Type: application/json" -d '{"name":"Sauron", "address":"1 Mordor ln", "email":"sauron@evileye.gov"}' ${API_URL}/api/customer
curl -H "Content-Type: application/json" -d '{"name":"Bilbo Baggins", "address":"10 Underhill rd", "email":"b.baggins@shire.org"}' ${API_URL}/api/customer
curl -H "Content-Type: application/json" -d '{"name":"Frodo Baggins", "address":"7 Molehole dr", "email":"f.baggins@shire.org"}' ${API_URL}/api/customer
curl -H "Content-Type: application/json" -d '{"name":"Thorin Oakenshield", "address":"100 Goldpile circle", "email":"t.oakenshield@lonely-mt.com"}' ${API_URL}/api/customer
curl -H "Content-Type: application/json" -d '{"name":"Gandalf", "address":"00 Anywhere", "email":"g.grey@tower.org"}' ${API_URL}/api/customer
