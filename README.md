# Lookup Service - New Version

## Overview

## This project provides the latest version of the Lookup service.

## Setup Instructions

## Step 1: Clone the Repository

git clone <repository-url>
cd <repository-directory>


## Step 2: Run the Application Using Docker
docker-compose up --build


### API Request

# You can test the service using the following curl command:
curl --location 'http://localhost:8080/lookup/staging' \
--header 'Content-Type: application/json' \
--header 'Authorization: Signature keyId="saleor-stg-seller.thewitslab.com|812f53e5-a57d-4bfd-b635-5535927e59e4|ed25519",algorithm="ed25519",created="1740984813",expires="1740988413",headers="(created) (expires) digest",signature="kaLO+JiNhChe1ivc21EyQnFmUQyf/0s7xRl/9P+fyhBtz5avBSy5pTaukaaFKAfRIevXAGTPpNXua1BtNtI/CA=="' \
--data '{
    "type": "BPP",
    "subscriber_id": "dev.zaraaq.com"
}'