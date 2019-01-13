build-backend:
	pushd ./backend/ && make build && popd

build-frontend:
	pushd ./frontend/ && make build && popd

build-frontend-prod:
	pushd ./frontend/ && make build-prod && popd

clear-old-frontend-build-artifacts:
	rm -rf ./backend/src/main/resources/static/*

move-frontend-build-artifacts-into-server:
	mv ./frontend/dist/* ./backend/src/main/resources/static/

build: build-frontend clear-old-frontend-build-artifacts move-frontend-build-artifacts-into-server build-backend

build-prod: build-frontend-prod clear-old-frontend-build-artifacts move-frontend-build-artifacts-into-server build-backend 

test-frontend:
	pushd ./frontend/ && make test && popd

test-backend:
	pushd ./backend/ && make test && popd

test: test-frontend test-backend

run-backend:
	pushd ./backend/ && make run && popd

run: test build run-backend

deploy-backend:
	pushd ./backend/ && make deploy && popd

deploy: test build-prod deploy-backend
