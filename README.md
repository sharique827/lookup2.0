# Lookup Service - New Version

## Overview

## This project provides the latest version of the Lookup service.

## Setup Instructions

### Step 1: Clone the Repository

git clone <https://github.com/sharique827/lookup2.0.git>
cd <lookup2.0>


### Step 2: Run the Application Using Docker
docker compose up --build


### API Request

### You can test the service using the following curl command:
curl --location 'http://localhost:8080/lookup/staging' \
--header 'Content-Type: application/json' \
--data '{
    "type": "BPP",
    "subscriber_id": "dev.zaraaq.com"
}'



## ENV FILE FORMAT

### STAGING
STG_URL=https://staging.registry.ondc.org/v2.0/lookup
STG_PRIVATE_KEY=your_private_key
STG_SUBSCRIBER_ID=your_subscriber_id
STG_UKID=your_ukid


### PREPROD
PRE_URL=https://preprod.registry.ondc.org/v2.0/lookup
PRE_PRIVATE_KEY=your_private_key
PRE_SUBSCRIBER_ID=your_subscriber_id
PRE_UKID=your_ukid


### PRODUCTION
PROD_URL=https://prod.registry.ondc.org/v2.0/lookup
PROD_PRIVATE_KEY=your_private_key
PROD_SUBSCRIBER_ID=yourr_subscriber_id
PROD_UKID=your_ukid



#### PORT=8080 (Keep the port as 8080), if you want to change the port please do update the  docker-compose.yml file