#!/bin/sh

cd frontend/
npm ci
cd _
make e2e
