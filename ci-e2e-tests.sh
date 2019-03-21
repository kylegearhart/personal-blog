#!/bin/sh

cd frontend/
npm ci
cd -
make e2e
