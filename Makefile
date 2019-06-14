install:
	npm install

build:
	make build-app && make build-server

build-app:
	./node_modules/.bin/webpack -p --env production

build-server:
	./node_modules/.bin/babel server --out-dir dist --source-maps inline --env production

start: 
	./node_modules/.bin/nodemon --exec ./node_modules/.bin/babel-node server/bin/slack.js

lint:
	./node_modules/.bin/eslint ./src

test:
	./node_modules/.bin/jest

test-watch:
	./node_modules/.bin/jest --watchAll
