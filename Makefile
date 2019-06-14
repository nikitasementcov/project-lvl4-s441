install:
	npm install

build:
	make build-app && make build-server

build-app:
	npx webpack -p --env production

build-server:
	./node_modules/.bin/babel server --out-dir dist --source-maps inline --env production

start: 
	npx nodemon --exec npx babel-node server/bin/slack.js

lint:
	npx eslint ./src

test:
	npx jest

test-watch:
	npx jest --watchAll
