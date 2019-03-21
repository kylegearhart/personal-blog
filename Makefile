# BUILD

build: build-frontend clear-old-frontend-build-artifacts move-frontend-build-artifacts-into-server build-backend

build-frontend:
	cd ./frontend/ && make build && cd -

clear-old-frontend-build-artifacts:
	rm -rf ./backend/src/main/resources/static/*

move-frontend-build-artifacts-into-server:
	mv ./frontend/dist/* ./backend/src/main/resources/static/

build-backend:
	cd ./backend/ && make build && cd -

build-prod: build-frontend-prod clear-old-frontend-build-artifacts move-frontend-build-artifacts-into-server build-backend 

build-frontend-prod:
	cd ./frontend/ && make build-prod && cd -


# RUN

run: build run-backend

run-backend:
	cd ./backend/ && make execute-jar && cd -

run-backend-in-background:
	cd ./backend/ && make execute-jar-in-background && cd -


# TEST

test: test-frontend test-backend

test-frontend:
	cd ./frontend/ && make test && cd -

test-backend:
	cd ./backend/ && make test && cd -

e2e: build run-backend-in-background run-e2e

run-e2e:
	cd ./frontend/ && make e2e


# DEPLOY

deploy: test build-prod deploy-backend

deploy-backend:
	cd ./backend/ && make deploy && cd -

