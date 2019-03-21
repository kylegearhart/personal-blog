build-backend:
	cd ./backend/ && make build && cd ..

build-frontend:
	cd ./frontend/ && make build && cd ..

build-frontend-prod:
	cd ./frontend/ && make build-prod && cd ..

clear-old-frontend-build-artifacts:
	rm -rf ./backend/src/main/resources/static/*

move-frontend-build-artifacts-into-server:
	mv ./frontend/dist/* ./backend/src/main/resources/static/

build: build-frontend clear-old-frontend-build-artifacts move-frontend-build-artifacts-into-server build-backend

build-prod: build-frontend-prod clear-old-frontend-build-artifacts move-frontend-build-artifacts-into-server build-backend 

test-frontend:
	cd ./frontend/ && make test && cd ..

test-backend:
	cd ./backend/ && make test && cd ..

test: test-frontend test-backend

run-e2e:
	cd ./frontend/ && make e2e

e2e: build run-backend-in-background run-e2e

run-backend:
	cd ./backend/ && make run && cd ..

run-backend-in-background:
	cd ./backend/ && make execute-jar-in-background && cd ..

run: test build run-backend

deploy-backend:
	cd ./backend/ && make deploy && cd ..

deploy: test build-prod deploy-backend
